import type { ShortTeamNames } from "./nba";

export interface GameData {
  homeTeam: {
    code: ShortTeamNames;
    name: string;
    score: number;
  };
  awayTeam: {
    code: ShortTeamNames;
    name: string;
    score: number;
  };
  stadium: string;
  date: string;
  winnerTeamCode: ShortTeamNames;
}
