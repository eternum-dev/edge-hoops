import type { ColumTableContent, GameData, PlayerData } from "../../types";
import type { TableCellProps } from "../atoms";
import type { GameCardProps, GraphCardProps, HeadToHeadTableProps } from "../organisms";
import {
  GameDetailTemplate
} from "../templates/GameDetailTemplate";
const mvpData: PlayerData = {
  namePlayer: "jordan",
  leftStats: [
    { label: "puntos", value: 1 },
    { label: "rebotes", value: 2 },
    { label: "asistencia", value: 1 },
    { label: "puntos", value: 2 },
    { label: "puntos", value: 2 },
  ],
  rightStats: [
    { label: "puntos", value: 1 },
    { label: "puntos", value: 2 },
    { label: "puntos", value: 1 },
    { label: "puntos", value: 2 },
    { label: "puntos", value: 2 },
  ],
  imagePlayer: { alt: "este es un alt", src: "" },
  positionPlayer: "central",
  shirtNumber: "10",
};

const graphData: GraphCardProps = {
  buttons: [{ label: "h" }, { label: "h" }, { label: "h" }],
  graphs: [
    { titleGraph: "1", value: [100, 105] },
    { titleGraph: "t2itulo", value: [100, 105] },
    { titleGraph: "ti3tulo", value: [100, 105] },
    { titleGraph: "tit3ulo", value: [100, 105] },
  ],
  leftTeam: "BOS",
  rightTeam: "ATL",
  typeGraph: "match",
};

const game: GameData = {
  homeTeam: { code: "CHI", name: "Chicago Bulls", score: 100 },
  awayTeam: { code: "LAL", name: "Los Angeles Lakers", score: 95 },
  stadium: "United Center",
  date: "2025-08-08",
  winnerTeamCode: "CHI",
};

const listGameData: GameCardProps = {
  game: game,
  size: "max",
};

const glossaryData = [
  { abbreviation: "a", fullWord: "aaaaaa" },
  { abbreviation: "b", fullWord: "bbbbbb" },
  { abbreviation: "c", fullWord: "cccccc" },
  { abbreviation: "d", fullWord: "dddddd" },
  { abbreviation: "e", fullWord: "eeeeee" },
  { abbreviation: "f", fullWord: "ffffff" },
];

const dataHeadToHead: {
  type: ColumTableContent;
  header: string;
  body: TableCellProps[];
}[] = [
  {
    type: "date",
    header: "resultado",
    body: [{ children: "mucho" }, { children: "mucho" }, { children: "mucho" }],
  },
  {
    type: "team",
    header: "resultado",
    body: [{ icon: "BOS", children: "hola" }, { icon: "CHI" }, { icon: "CHO" }],
  },
  {
    type: "text",
    header: "resultado",
    body: [{ children: "mucho" }, { children: "mucho" }, { children: "mucho" }],
  },
];

const headToHeadData: HeadToHeadTableProps = {
  glossary: glossaryData,
  matchup: { leftTeam: "ATL", rightTeam: "BRK" },
  tableData: dataHeadToHead,
};

const gameTemplateMockData = {
  match: listGameData,
  homeMvp: { playerData: mvpData },
  awayMvp: { playerData: mvpData },
  graph: graphData,
  headTohead: headToHeadData,
  player: { tableData: dataHeadToHead, glossary: glossaryData },
};

export const GameDetailPage: React.FC = () => {
  return (
    
      <GameDetailTemplate {...gameTemplateMockData}/>

  );
};
