import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const gameStatus = v.union(
  v.literal("WAITING"),
  v.literal("PLAYING"),
  v.literal("CHALLENGED"),
  v.literal("ENDED")
);

export default defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    username: v.string(),
    wins: v.number(),
    losses: v.number(),
  })
    .index("email", ["email"])
    .index("phone", ["phone"])
    .index("by_username", ["username"]),

  wordCategories: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    words: v.array(v.string()),
    isActive: v.boolean(),
    updatedAt: v.optional(v.number()),
  })
    .index("by_name", ["name"])
    .index("by_isActive", ["isActive"]),

  games: defineTable({
    /** Stable string id for URLs (e.g. former Prisma cuid). */
    gameId: v.string(),
    status: gameStatus,
    currentWord: v.string(),
    currentTurn: v.id("users"),
    player1Id: v.id("users"),
    player2Id: v.optional(v.id("users")),
    player1GhostTears: v.array(v.string()),
    player2GhostTears: v.array(v.string()),
    winnerId: v.optional(v.id("users")),
    wordListCategory: v.string(),
    updatedAt: v.number(),
  })
    .index("by_gameId", ["gameId"])
    .index("by_player1", ["player1Id"])
    .index("by_player2", ["player2Id"]),
});
