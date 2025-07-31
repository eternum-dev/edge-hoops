import * as TeamsIcon from "./team-logos";

type TeamLogoNames =
  | "ATL"
  | "BOS"
  | "BRK"
  | "CHI"
  | "CHO"
  | "CLE"
  | "DAL"
  | "DEN"
  | "DET"
  | "GSW"
  | "HOU"
  | "IND"
  | "LAC"
  | "LAL"
  | "MEM"
  | "MIA"
  | "MIL"
  | "MIN"
  | "NOP"
  | "NYK"
  | "OKC"
  | "ORL"
  | "PHI"
  | "PHO"
  | "POR"
  | "SAC"
  | "SAS"
  | "TOT"
  | "UTA"
  | "WAS";

type TeamLogoSize = "small" | "medium" | "full";
type TeamLogoComponentKeys = `${TeamLogoNames}Logo`;

interface TeamLogoProps {
  team?: TeamLogoNames;
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
