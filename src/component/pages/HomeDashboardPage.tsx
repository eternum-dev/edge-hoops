import type { ColumTableContent } from "../../types";
import type { GameData, PlayerData, TeamStatsData } from "../../types/games";
import type { TableCellProps } from "../atoms";
import type { GameListProps, GraphCardProps } from "../organisms";
import {
  HomeDashboardTemplate,
  type HomeDashboardTemplateProps,
} from "../templates/HomeDashboardTemplate";
import { useCallback, useState } from "react";

const game: GameData = {
  homeTeam: { code: "CHI", name: "Chicago Bulls", score: 100 },
  awayTeam: { code: "LAL", name: "Los Angeles Lakers", score: 95 },
  stadium: "United Center",
  date: "2025-08-08",
  winnerTeamCode: "CHI",
};
const listGame: GameData[] = [game, game, game, game, game, game];

const chicagoBullsStats: TeamStatsData = {
  logoCode: "CLE",
  statsLeft: [
    { title: "Pts", value: 102 },
    { title: "Reb", value: 45 },
    { title: "Asi", value: 25 },
    { title: "Rob", value: 45 },
    { title: "Per", value: 25 },
  ],
  statsRight: [
    { title: "Pts", value: 102 },
    { title: "Reb", value: 45 },
    { title: "Asi", value: 25 },
    { title: "Rob", value: 45 },
    { title: "Per", value: 25 },
  ],
};

const mvpData: PlayerData = {
  namePlayer: "jordan",
  leftStats: [
    { label: "puntos", value: 1 },
    { label: "puntos", value: 2 },
    { label: "puntos", value: 1 },
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
    body: [{ icon: "BOS", children: "hola" }, { icon: "CLE" }, { icon: "CHO" }],
  },
  {
    type: "text",
    header: "resultado",
    body: [{ children: "mucho" }, { children: "mucho" }, { children: "mucho" }],
  },
];

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

export const HomeDashboardPage = () => {
  const [isSelectedCard, setIsSelectedCard] = useState<string | number>(0);

  const handleIsSelected = useCallback((currentIndex: number | string) => {
    console.log(isSelectedCard, currentIndex);
    setIsSelectedCard(currentIndex);
  }, []);

  const listGameData: GameListProps = {
    gameListData: listGame,
    // size: "max",
    handleIsSelected: handleIsSelected,
    isSelectedGame: isSelectedCard,
  };

  const homeData: HomeDashboardTemplateProps = {
    games: listGameData,
    teamStats: {
      TeamStatsData: [chicagoBullsStats, chicagoBullsStats],
      type: "match",
    },
    headToHead: {
      glossary: glossaryData,
      matchup: { leftTeam: "ATL", rightTeam: "BRK" },
      tableData: dataHeadToHead,
    },
    graph: graphData,
    mvp: { playerData: mvpData },
  };

  return <HomeDashboardTemplate {...homeData} />;
};
