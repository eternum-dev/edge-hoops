import type { ShortTeamNames } from "../../types/nba";
import * as TeamsIcon from "./team-logos";


type TeamLogoSize = "small" | "medium" | "full";
type TeamLogoComponentKeys = `${ShortTeamNames}Logo`;

interface TeamLogoProps {
  team?: ShortTeamNames;
  size?: TeamLogoSize;
}
const baseSizeTeam: Record<TeamLogoSize, number> = {
  full: 96,
  medium: 64,
  small: 32,
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
