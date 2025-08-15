import type { TeamLogoComponentKeys, TeamLogoSize } from "../../types";
import type { ShortTeamNames } from "../../types/nba";
import * as TeamsIcon from "./team-logos";

interface TeamLogoProps {
  team?: ShortTeamNames;
  size?: TeamLogoSize;
}

const baseSizeTeam: Record<TeamLogoSize, number> = {
  full: 96,
  medium: 64,
  small: 32,
  verySmall: 24,
};

export const TeamLogo: React.FC<TeamLogoProps> = ({
  team = "ATL",
  size = "medium",
}) => {
  const keyTeam = `${team.toUpperCase()}Logo` as TeamLogoComponentKeys;

  const Logo = TeamsIcon[keyTeam];

  if (!Logo) return <div>Team not found: {team}</div>;

  return <Logo size={baseSizeTeam[size]} />;
};
