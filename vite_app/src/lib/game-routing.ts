import { GAME_STATUS, type GameWithPlayers } from "@/types/game";

export function resolveActiveGamePath(game: GameWithPlayers) {
  if (
    game.status === GAME_STATUS.WAITING &&
    game.player2Id !== null &&
    game.player2Id === game.currentUserId
  ) {
    return `/game/invite/${game.id}`;
  }

  if (
    game.status === GAME_STATUS.WAITING &&
    game.player2Id === null &&
    game.player1Id === game.currentUserId
  ) {
    return `/game/category/${game.wordListCategory}/new/${game.id}`;
  }

  if (
    game.status === GAME_STATUS.WAITING &&
    game.player2Id !== null &&
    game.player1Id === game.currentUserId
  ) {
    return `/game/category/${game.wordListCategory}/waiting/${game.id}`;
  }

  return `/game/category/${game.wordListCategory}/now-playing/${game.id}`;
}
