import { getAuthUserId } from "@convex-dev/auth/server";
import {
  mutation,
  query,
  type MutationCtx,
  type QueryCtx,
} from "./_generated/server";
import { v } from "convex/values";
import type { Doc, Id } from "./_generated/dataModel";

const GHOST_TEARS = "GHOST-TEARS".split("");

type GameStatus = "WAITING" | "PLAYING" | "CHALLENGED" | "ENDED";
type AnyCtx = QueryCtx | MutationCtx;

function toPublicUser(u: Doc<"users">) {
  return {
    id: u._id as string,
    username: u.name ?? u.email?.split("@")[0] ?? u.username,
    wins: u.wins,
    losses: u.losses,
  };
}

async function requireCurrentUser(ctx: AnyCtx) {
  const userId = await getAuthUserId(ctx);
  if (userId === null) {
    throw new Error("Not authenticated");
  }
  const user = await ctx.db.get(userId);
  if (user === null) {
    throw new Error("User record not found");
  }
  return user;
}

async function gameByGameId(ctx: AnyCtx, gameId: string) {
  return await ctx.db
    .query("games")
    .withIndex("by_gameId", (q) => q.eq("gameId", gameId))
    .unique();
}

function hasOverride<Key extends string>(
  value: object,
  key: Key
): value is Record<Key, unknown> {
  return Object.prototype.hasOwnProperty.call(value, key);
}

function buildGameReplacement(
  game: Doc<"games">,
  overrides: Partial<{
    gameId: string;
    status: GameStatus;
    currentWord: string;
    currentTurn: Id<"users">;
    player1Id: Id<"users">;
    player2Id: Id<"users"> | null;
    player1GhostTears: string[];
    player2GhostTears: string[];
    winnerId: Id<"users"> | null;
    wordListCategory: string;
    updatedAt: number;
  }>
) {
  const replacement: {
    gameId: string;
    status: GameStatus;
    currentWord: string;
    currentTurn: Id<"users">;
    player1Id: Id<"users">;
    player1GhostTears: string[];
    player2GhostTears: string[];
    wordListCategory: string;
    updatedAt: number;
    player2Id?: Id<"users">;
    winnerId?: Id<"users">;
  } = {
    gameId: overrides.gameId ?? game.gameId,
    status: overrides.status ?? game.status,
    currentWord: overrides.currentWord ?? game.currentWord,
    currentTurn: overrides.currentTurn ?? game.currentTurn,
    player1Id: overrides.player1Id ?? game.player1Id,
    player1GhostTears: overrides.player1GhostTears ?? game.player1GhostTears,
    player2GhostTears: overrides.player2GhostTears ?? game.player2GhostTears,
    wordListCategory: overrides.wordListCategory ?? game.wordListCategory,
    updatedAt: overrides.updatedAt ?? game.updatedAt,
  };

  const player2Id = hasOverride(overrides, "player2Id")
    ? overrides.player2Id
    : game.player2Id;
  if (player2Id !== undefined && player2Id !== null) {
    replacement.player2Id = player2Id;
  }

  const winnerId = hasOverride(overrides, "winnerId")
    ? overrides.winnerId
    : game.winnerId;
  if (winnerId !== undefined && winnerId !== null) {
    replacement.winnerId = winnerId;
  }

  return replacement;
}

function otherPlayerId(game: Doc<"games">, playerId: Id<"users">) {
  if (playerId === game.player1Id) {
    return game.player2Id ?? null;
  }
  if (game.player2Id === playerId) {
    return game.player1Id;
  }
  return null;
}

function ensurePlayer(game: Doc<"games">, userId: Id<"users">) {
  if (game.player1Id !== userId && game.player2Id !== userId) {
    throw new Error("Unauthorized");
  }
}

function resolveGameOutcome(
  game: Doc<"games">,
  playerGettingTear: Id<"users">,
  nextTurn: Id<"users">
) {
  const isPlayer1 = playerGettingTear === game.player1Id;
  const currentTears = isPlayer1
    ? game.player1GhostTears
    : game.player2GhostTears;
  const nextLetter = GHOST_TEARS[currentTears.length];
  if (!nextLetter) {
    throw new Error("Game is already complete");
  }

  const player1GhostTears = isPlayer1
    ? [...game.player1GhostTears, nextLetter]
    : game.player1GhostTears;
  const player2GhostTears = isPlayer1
    ? game.player2GhostTears
    : [...game.player2GhostTears, nextLetter];

  const player1Complete = player1GhostTears.length >= GHOST_TEARS.length;
  const player2Complete = player2GhostTears.length >= GHOST_TEARS.length;

  return {
    status: player1Complete || player2Complete ? ("ENDED" as const) : ("PLAYING" as const),
    winnerId: player1Complete
      ? game.player2Id ?? null
      : player2Complete
        ? game.player1Id
        : null,
    currentTurn: nextTurn,
    currentWord: "",
    player1GhostTears,
    player2GhostTears,
    updatedAt: Date.now(),
  };
}

async function hydrateGameForUser(
  ctx: AnyCtx,
  game: Doc<"games">,
  currentUserId: Id<"users">
) {
  const [p1, p2] = await Promise.all([
    ctx.db.get(game.player1Id),
    game.player2Id !== undefined ? ctx.db.get(game.player2Id) : Promise.resolve(null),
  ]);
  if (p1 === null) {
    return null;
  }
  return {
    id: game.gameId,
    status: game.status,
    currentWord: game.currentWord,
    currentTurn: game.currentTurn as string,
    player1Id: game.player1Id as string,
    player2Id: (game.player2Id ?? null) as string | null,
    player1GhostTears: game.player1GhostTears,
    player2GhostTears: game.player2GhostTears,
    winnerId: (game.winnerId ?? null) as string | null,
    wordListCategory: game.wordListCategory,
    player1: toPublicUser(p1),
    player2: p2 !== null ? toPublicUser(p2) : null,
    currentUserId: currentUserId as string,
  };
}

export const getById = query({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      return null;
    }
    const user = await ctx.db.get(userId);
    if (user === null) {
      return null;
    }
    const game = await ctx.db
      .query("games")
      .withIndex("by_gameId", (q) => q.eq("gameId", gameId))
      .unique();
    if (game === null) {
      return null;
    }
    if (game.player1Id !== user._id && game.player2Id !== user._id) {
      return null;
    }
    return await hydrateGameForUser(ctx, game, user._id);
  },
});

export const getActiveForCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      return null;
    }
    const user = await ctx.db.get(userId);
    if (user === null) {
      return null;
    }

    const asP1 = await ctx.db
      .query("games")
      .withIndex("by_player1", (q) => q.eq("player1Id", user._id))
      .collect();
    const asP2 = await ctx.db
      .query("games")
      .withIndex("by_player2", (q) => q.eq("player2Id", user._id))
      .collect();

    const seen = new Map<string, Doc<"games">>();
    for (const g of [...asP1, ...asP2]) {
      seen.set(g._id, g);
    }

    const candidates = [...seen.values()].filter((g) => g.status !== "ENDED");
    if (candidates.length === 0) {
      return null;
    }

    candidates.sort((a, b) => b.updatedAt - a.updatedAt);
    const game = candidates[0]!;
    return await hydrateGameForUser(ctx, game, user._id);
  },
});

export const create = mutation({
  args: { category: v.string() },
  handler: async (ctx, { category }) => {
    const user = await requireCurrentUser(ctx);
    const now = Date.now();
    const gameId = crypto.randomUUID();
    const id = await ctx.db.insert("games", {
      gameId,
      status: "WAITING",
      currentWord: "",
      currentTurn: user._id,
      player1Id: user._id,
      player1GhostTears: [],
      player2GhostTears: [],
      wordListCategory: category,
      updatedAt: now,
    });
    const game = await ctx.db.get(id);
    if (game === null) {
      throw new Error("Failed to create game");
    }
    const hydrated = await hydrateGameForUser(ctx, game, user._id);
    if (hydrated === null) {
      throw new Error("Failed to load created game");
    }
    return hydrated;
  },
});

export const inviteByUsername = mutation({
  args: {
    gameId: v.string(),
    username: v.string(),
  },
  handler: async (ctx, { gameId, username }) => {
    const user = await requireCurrentUser(ctx);
    const invitee = await ctx.db
      .query("users")
      .withIndex("by_username", (q) => q.eq("username", username))
      .unique();

    if (invitee === null) {
      throw new Error("Player not found");
    }

    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }

    if (game.player1Id !== user._id) {
      throw new Error("Only the host can invite a player");
    }
    if (game.status !== "WAITING") {
      throw new Error("Game is not waiting for players");
    }
    if (game.player2Id !== undefined) {
      throw new Error("Invite already sent");
    }
    if (invitee._id === user._id) {
      throw new Error("Cannot invite yourself");
    }

    await ctx.db.patch(game._id, {
      player2Id: invitee._id,
      updatedAt: Date.now(),
    });

    const updated = await gameByGameId(ctx, gameId);
    if (updated === null) {
      throw new Error("Game not found after invite");
    }
    const hydrated = await hydrateGameForUser(ctx, updated, user._id);
    if (hydrated === null) {
      throw new Error("Failed to load invited game");
    }
    return hydrated;
  },
});

export const join = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const user = await requireCurrentUser(ctx);
    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }
    if (game.player2Id !== user._id) {
      throw new Error("Only the invited player can join");
    }
    if (game.status === "ENDED") {
      throw new Error("Game has already ended");
    }

    await ctx.db.patch(game._id, {
      status: "PLAYING",
      updatedAt: Date.now(),
    });

    const updated = await gameByGameId(ctx, gameId);
    if (updated === null) {
      throw new Error("Game not found after join");
    }
    const hydrated = await hydrateGameForUser(ctx, updated, user._id);
    if (hydrated === null) {
      throw new Error("Failed to load joined game");
    }
    return hydrated;
  },
});

export const cancelInvite = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const user = await requireCurrentUser(ctx);
    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }
    if (game.player1Id !== user._id) {
      throw new Error("Only the host can cancel the invite");
    }
    if (game.status !== "WAITING") {
      throw new Error("Game is not waiting for players");
    }
    if (game.player2Id === undefined) {
      throw new Error("No invite to cancel");
    }

    await ctx.db.replace(
      game._id,
      buildGameReplacement(game, {
        player2Id: null,
        updatedAt: Date.now(),
      })
    );

    const updated = await gameByGameId(ctx, gameId);
    if (updated === null) {
      throw new Error("Game not found after cancelling invite");
    }
    const hydrated = await hydrateGameForUser(ctx, updated, user._id);
    if (hydrated === null) {
      throw new Error("Failed to load updated game");
    }
    return hydrated;
  },
});

export const updateWord = mutation({
  args: {
    gameId: v.string(),
    word: v.string(),
  },
  handler: async (ctx, { gameId, word }) => {
    const user = await requireCurrentUser(ctx);
    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }
    ensurePlayer(game, user._id);

    if (game.status !== "PLAYING") {
      throw new Error("Game is not in playing state");
    }
    if (game.currentTurn !== user._id) {
      throw new Error("Not your turn");
    }
    const nextPlayerId = otherPlayerId(game, user._id);
    if (nextPlayerId === null) {
      throw new Error("Waiting for second player");
    }

    await ctx.db.patch(game._id, {
      currentWord: word,
      currentTurn: nextPlayerId,
      updatedAt: Date.now(),
    });
  },
});

export const challenge = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const user = await requireCurrentUser(ctx);
    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }
    ensurePlayer(game, user._id);

    if (game.status !== "PLAYING") {
      throw new Error("Game is not in playing state");
    }
    if (game.currentTurn !== user._id) {
      throw new Error("Not your turn");
    }
    if (!game.currentWord) {
      throw new Error("No word to challenge");
    }
    const defendingPlayerId = otherPlayerId(game, user._id);
    if (defendingPlayerId === null) {
      throw new Error("Waiting for second player");
    }

    await ctx.db.patch(game._id, {
      status: "CHALLENGED",
      currentTurn: defendingPlayerId,
      updatedAt: Date.now(),
    });

    const updated = await gameByGameId(ctx, gameId);
    if (updated === null) {
      throw new Error("Game not found after challenge");
    }
    const hydrated = await hydrateGameForUser(ctx, updated, user._id);
    if (hydrated === null) {
      throw new Error("Failed to load challenged game");
    }
    return hydrated;
  },
});

export const accept = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const user = await requireCurrentUser(ctx);
    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }
    ensurePlayer(game, user._id);

    if (game.status !== "PLAYING") {
      throw new Error("Game is not in playing state");
    }
    if (game.currentTurn !== user._id) {
      throw new Error("Not your turn");
    }
    if (!game.currentWord) {
      throw new Error("No word to accept");
    }
    const submittingPlayerId = otherPlayerId(game, user._id);
    if (submittingPlayerId === null) {
      throw new Error("Waiting for second player");
    }

    const outcome = resolveGameOutcome(game, user._id, submittingPlayerId);
    await ctx.db.replace(game._id, buildGameReplacement(game, outcome));

    const updated = await gameByGameId(ctx, gameId);
    if (updated === null) {
      throw new Error("Game not found after accepting word");
    }
    const hydrated = await hydrateGameForUser(ctx, updated, user._id);
    if (hydrated === null) {
      throw new Error("Failed to load accepted game");
    }
    return hydrated;
  },
});

export const defend = mutation({
  args: {
    gameId: v.string(),
    defenseWord: v.string(),
  },
  handler: async (ctx, { gameId, defenseWord }) => {
    const user = await requireCurrentUser(ctx);
    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }
    ensurePlayer(game, user._id);

    if (game.status !== "CHALLENGED") {
      throw new Error("Game is not in challenged state");
    }
    if (game.currentTurn !== user._id) {
      throw new Error("Not your turn to defend");
    }
    if (!defenseWord) {
      throw new Error("No defense word provided");
    }
    if (!defenseWord.toLowerCase().startsWith(game.currentWord.toLowerCase())) {
      throw new Error("Defense word must start with the current word");
    }

    const category = await ctx.db
      .query("wordCategories")
      .withIndex("by_name", (q) => q.eq("name", game.wordListCategory))
      .unique();
    if (category === null) {
      throw new Error("Word category not found");
    }

    const challengerId = otherPlayerId(game, user._id);
    if (challengerId === null) {
      throw new Error("Waiting for second player");
    }

    const isValidDefense = category.words.includes(defenseWord.toLowerCase());
    const playerGettingTear = isValidDefense ? challengerId : user._id;
    const nextTurn = isValidDefense ? user._id : challengerId;

    const outcome = resolveGameOutcome(game, playerGettingTear, nextTurn);
    await ctx.db.replace(game._id, buildGameReplacement(game, outcome));

    const updated = await gameByGameId(ctx, gameId);
    if (updated === null) {
      throw new Error("Game not found after defending");
    }
    const hydrated = await hydrateGameForUser(ctx, updated, user._id);
    if (hydrated === null) {
      throw new Error("Failed to load defended game");
    }
    return hydrated;
  },
});

export const giveUp = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const user = await requireCurrentUser(ctx);
    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }
    ensurePlayer(game, user._id);

    if (game.status !== "CHALLENGED") {
      throw new Error("Game is not in challenged state");
    }
    if (game.currentTurn !== user._id) {
      throw new Error("Not your turn to defend");
    }

    const challengerId = otherPlayerId(game, user._id);
    if (challengerId === null) {
      throw new Error("Waiting for second player");
    }

    const outcome = resolveGameOutcome(game, user._id, challengerId);
    await ctx.db.replace(game._id, buildGameReplacement(game, outcome));

    const updated = await gameByGameId(ctx, gameId);
    if (updated === null) {
      throw new Error("Game not found after giving up");
    }
    const hydrated = await hydrateGameForUser(ctx, updated, user._id);
    if (hydrated === null) {
      throw new Error("Failed to load updated game");
    }
    return hydrated;
  },
});

export const endGame = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const user = await requireCurrentUser(ctx);
    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }
    ensurePlayer(game, user._id);

    await ctx.db.patch(game._id, {
      status: "ENDED",
      updatedAt: Date.now(),
    });
  },
});

export const playAgain = mutation({
  args: { gameId: v.string() },
  handler: async (ctx, { gameId }) => {
    const user = await requireCurrentUser(ctx);
    const game = await gameByGameId(ctx, gameId);
    if (game === null) {
      throw new Error("Game not found");
    }
    if (game.player1Id !== user._id) {
      throw new Error("Only the host can start a rematch");
    }

    await ctx.db.patch(game._id, {
      status: "ENDED",
      updatedAt: Date.now(),
    });

    const nextGameId = crypto.randomUUID();
    const now = Date.now();
    const insertedId = await ctx.db.insert("games", {
      gameId: nextGameId,
      status: "WAITING",
      currentWord: "",
      currentTurn: game.player1Id,
      player1Id: game.player1Id,
      player1GhostTears: [],
      player2GhostTears: [],
      ...(game.player2Id !== undefined ? { player2Id: game.player2Id } : {}),
      wordListCategory: game.wordListCategory,
      updatedAt: now,
    });

    const nextGame = await ctx.db.get(insertedId);
    if (nextGame === null) {
      throw new Error("Failed to create rematch");
    }
    const hydrated = await hydrateGameForUser(ctx, nextGame, user._id);
    if (hydrated === null) {
      throw new Error("Failed to load rematch");
    }
    return hydrated;
  },
});
