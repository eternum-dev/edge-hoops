export type ShortTeamNames =
  | "ATL"
  | "BOS"
  | "BRK"
  | "CHI"
  | "CHO"
  | "CLE"
  | "DAL"
  | "DEN"
  | "DET"
  | "GSW"
  | "HOU"
  | "IND"
  | "LAC"
  | "LAL"
  | "MEM"
  | "MIA"
  | "MIL"
  | "MIN"
  | "NOP"
  | "NYK"
  | "OKC"
  | "ORL"
  | "PHI"
  | "PHO"
  | "POR"
  | "SAC"
  | "SAS"
  | "TOT"
  | "UTA"
  | "WAS";

export type StatsItemName =
  | { short: "PTS"; label: "Puntos" }
  | { short: "AST"; label: "Asistencias" }
  | { short: "REB"; label: "Rebotes totales" }
  | { short: "STL"; label: "Robos" }
  | { short: "TO"; label: "Pérdidas de balón" }
  | { short: "FG%"; label: "Porcentaje de tiros de campo" };

export type ConferenceNames = "EAST" | "WEST";

export type DivisionNames =
  | "ATLANTIC"
  | "CENTRAL"
  | "SOUTHEAST"
  | "NORTHWEST"
  | "PACIFIC"
  | "SOUTHWEST";

export interface NBAteam {
  name: string;
  shortName: ShortTeamNames;
  conference: ConferenceNames;
  division: DivisionNames;
  stadium: string;
}
