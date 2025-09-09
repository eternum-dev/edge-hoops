import {
  GameList,
  HeadToHeadTable,
  TeamStatsSummary,
  GraphCard,
  MvpCard,
  type MvpCardProps,
  type GraphCardProps,
  type HeadToHeadTableProps,
  type TeamStatsSummaryProps,
  type GameListProps,
} from "../organisms";

export interface HomeDashboardTemplateProps {
  games: GameListProps;
  teamStats: TeamStatsSummaryProps;
  headToHead: HeadToHeadTableProps;
  graph: GraphCardProps;
  mvp: MvpCardProps;
}

export const HomeDashboardTemplate: React.FC<HomeDashboardTemplateProps> = ({
  games,
  teamStats,
  headToHead,
  graph,
  mvp,
}) => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-4 p-5 max-h-lvh">
      <GameList {...games} className="col-span-5 row-span-7" />
      <TeamStatsSummary {...teamStats} className="col-span-7 row-span-6" />
      
      <div className="col-span-7 flex gap-4 row-span-6 w-full">
        <GraphCard {...graph} />
        <MvpCard {...mvp} />
      </div>
      <HeadToHeadTable {...headToHead} className="col-span-5 row-span-5" />
    </div>
  );
};
