import type { TableCellProps } from "../component/atoms";
import type { ShortTeamNames } from "./nba";
import type { ColumTableContent } from "./ui";

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
  team?: ShortTeamNames;
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
  className?: string;
}

export interface TeamGraphData {
  title?: string;
  graphs: {
    titleGraph: string;
    value: [number | string];
  }[];
  buttons: { label: string }[];
  typeGraph: "team";
  className?: string;
}

export type StatsPlayer = {
  label: string;
  value: string | number;
};

export interface PlayerData {
  namePlayer: string;
  leftStats: StatsPlayer[];
  rightStats: StatsPlayer[];
  imagePlayer: { src: string; alt: string };
  positionPlayer: string;
  shirtNumber: string;
}

export type TableData = {
  type: ColumTableContent;
  header: string;
  body: TableCellProps[];
};

export type MatchUpData = {
  leftTeam: ShortTeamNames;
  rightTeam: ShortTeamNames;
};

export interface DefinitionProps {
  abbreviation: string;
  fullWord: string;
}
