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

export interface StatItem {
  title: string;
  value: number | string;
}

export interface TeamStatsData {
  logoCode: ShortTeamNames;
  statsLeft: StatItem[];
  statsRight: StatItem[];
}

export interface DropDownOptions {
  team: ShortTeamNames;
  label: string;
}

