import { Divider, TeamLogo } from "../atoms";
import type { ShortTeamNames } from "../../types/nba";

interface MatchUpTeamProps {
  leftTeam: ShortTeamNames;
  rightTeam: ShortTeamNames;
}

export const MatchUpTeam: React.FC<MatchUpTeamProps> = ({
  leftTeam = "BOS",
  rightTeam = "CHI",
}) => {
  return (
    <div className="flex h-fit">
      <TeamLogo size="small" team={leftTeam} />
      <Divider className="w-[12px]!" />
      <TeamLogo size="small" team={rightTeam} />
    </div>
  );
};
