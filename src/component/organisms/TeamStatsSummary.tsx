import type { TeamStatsData } from "../../types";
import { Title } from "../atoms";
import { TeamStatsCard } from "./TeamStatsCard";

interface TeamSummaryProps {
  type: "team";
  title?: string;
  TeamStatsData: [TeamStatsData];
}

interface MatchSummaryProps {
  type: "match";
  title?: string;
  TeamStatsData: [TeamStatsData, TeamStatsData];
}

type TeamStatsSummaryProps = MatchSummaryProps | TeamSummaryProps;

export const TeamStatsSummary: React.FC<TeamStatsSummaryProps> = ({
  type,
  title,
  TeamStatsData,
}) => {
  return (
    <section className="flex flex-col gap-4 bg-neutral-100 rounded-4xl p-5">
      <header>
        <Title type="h2">
          {title ??
            (type === "match"
              ? "Estadísticas previas por equipo"
              : "Estadísticas de equipo")}
        </Title>
      </header>
      <div className="flex gap-2.5">
        {type === "match" ? (
          <>
            <TeamStatsCard statsData={TeamStatsData[0]} borderColor="primary" />
            <TeamStatsCard
              statsData={TeamStatsData[1]}
              borderColor="secondary"
            />
          </>
        ) : (
          <TeamStatsCard statsData={TeamStatsData[0]}></TeamStatsCard>
        )}
      </div>
    </section>
  );
};
