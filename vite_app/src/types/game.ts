export const GAME_STATUS = {
  WAITING: "WAITING",
  PLAYING: "PLAYING",
  CHALLENGED: "CHALLENGED",
  ENDED: "ENDED",
} as const;

export type GameStatus = (typeof GAME_STATUS)[keyof typeof GAME_STATUS];

export type PublicUser = {
  id: string;
  username: string;
  wins: number;
  losses: number;
};

export type GameWithPlayers = {
  id: string;
  status: GameStatus;
  currentWord: string;
  currentTurn: string;
  player1Id: string;
  player2Id: string | null;
  player1GhostTears: string[];
  player2GhostTears: string[];
  winnerId: string | null;
  wordListCategory: string;
  player1: PublicUser;
  player2: PublicUser | null;
  currentUserId: string;
};

export type CategoryOption = {
  id: string;
  name: string;
};
