import { TeamStreak, type TeamStreakProps } from "../molecules";
import {
  GraphCard,
  HeaderTeam,
  MvpCard,
  TeamHistoryTable,
  TeamStatsSummary,
  type GraphCardProps,
  type HeaderTeamProps,
  type MvpCardProps,
  type TeamHistoryTableProps,
  type TeamStatsSummaryProps,
} from "../organisms";

export interface TeamDetailTemplateProps {
  header: HeaderTeamProps;
  streak: TeamStreakProps;
  mvp: MvpCardProps;
  graph: GraphCardProps;
  summary: TeamStatsSummaryProps;
  table: TeamHistoryTableProps;
}

export const TeamDetailTemplate: React.FC<TeamDetailTemplateProps> = (
  props
) => {
  const { graph, header, mvp, streak, summary, table } = props;

  return (
    <div className="grid grid-cols-12 grid-rows-12 h-full max-h-lvh gap-4 p-5">
      <HeaderTeam {...header} className="col-span-10 row-span-2" />
      <TeamStreak {...streak} className="col-span-2 row-span-2" />
      <MvpCard {...mvp} className="col-span-4 row-span-5" />
      <GraphCard {...graph} className="col-span-4 row-span-5" />
      <TeamStatsSummary {...summary} className="col-span-4 row-span-5" />
      <TeamHistoryTable {...table} className="col-span-12 row-span-5" />
    </div>
  );
};
