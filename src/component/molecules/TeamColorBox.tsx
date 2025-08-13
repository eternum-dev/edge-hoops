import type { ShortTeamNames } from "../../types/nba";
import { Divider, ScuareColor, TeamLogo } from "../atoms";

interface TeamColorBoxProps {
  leftTeam: ShortTeamNames;
  rightTeam: ShortTeamNames;
}

export const TeamColorBox: React.FC<TeamColorBoxProps> = ({
  leftTeam = "BOS",
  rightTeam = "BRK",
}) => {
  return (
    <div className="flex px-2 py-1 gap-2">
      <div className="flex gap-1">
        <ScuareColor colorBox="primary" />
        <TeamLogo size="verySmall" team={leftTeam} />
      </div>
      <Divider className="w-[16px]!" />
      <div className="flex gap-1">
        <TeamLogo size="verySmall" team={rightTeam} />
        <ScuareColor colorBox="secondary" />
      </div>
    </div>
  );
};
