import type { BorderColor, TeamStatsData } from "../../types";
import { TeamLogo } from "../atoms";
import { StatBox } from "../molecules";

interface TeamStatsCard {
  borderColor?: BorderColor;
  statsData: TeamStatsData;
}

const boderStyles: Record<BorderColor, string> = {
  neutral: "border-0",
  primary: "border-1 border-primary-300",
  secondary: "border-1 border-secondary-300",
};

export const TeamStatsCard: React.FC<TeamStatsCard> = ({
  borderColor = "neutral",
  statsData,
}) => {

  return (
    <section
      className={`bg-neutral-100 p-4 flex w-full justify-between rounded-3xl shadow-md shadow-neutral-700 ${boderStyles[borderColor]}`}
    >
      <div className="flex flex-col gap-2">
        {statsData.statsLeft.map((stats, index) => (
          <StatBox
            textPosition="left"
            title={stats.title}
            value={stats.value}
            key={index}
          />
        ))}
      </div>
      <TeamLogo team={statsData.logoCode} size="full" />
      <div className="flex flex-col gap-2 items-end">
        {statsData.statsRight.map((stats, index) => (
          <StatBox
            textPosition="right"
            title={stats.title}
            value={stats.value}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
