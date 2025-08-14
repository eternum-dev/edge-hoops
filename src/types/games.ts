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

export interface MatchGraphData {
  title?: string;
  graphs: {
    titleGraph: string;
    value: [number | string, number | string];
  }[];
  buttons: { label: string }[];
  typeGraph: "match";
  leftTeam: ShortTeamNames;
  rightTeam: ShortTeamNames;
}

export interface TeamGraphData {
  title?: string;
  graphs: {
    titleGraph: string;
    value: [number | string];
    
  }[];
  buttons: { label: string }[];
  typeGraph: "team";
}