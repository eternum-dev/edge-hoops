import type { ShortTeamNames } from "../../types/nba";
import { Strong, TeamLogo, Text } from "../atoms";

type TeamScorePositionLogo = "left" | "right";
type TeamScoreColorText = "black" | "white";
type TeamScoreSize = "small" | "full";
type SizeStylesTypes = { text: "m" | "l"; logo: "small" | "medium" };

interface TeamScoreProps {
  positionLogo?: TeamScorePositionLogo;
  colorText?: TeamScoreColorText;
  size?: TeamScoreSize;
  score?: string | number;
  teamName?: string;
  team: ShortTeamNames;
}

const positionStyles: Record<TeamScorePositionLogo, string> = {
  left: "flex-row-reverse",
  right: "flex-row",
};

const sizeStyles: Record<TeamScoreSize, SizeStylesTypes> = {
  full: {
    text: "l",
    logo: "medium",
  },
  small: {
    text: "m",
    logo: "small",
  },
};

export const TeamScore: React.FC<TeamScoreProps> = ({
  positionLogo = "left",
  colorText = "black",
  size = "small",
  score = 100,
  teamName = "Atlanta Hawks's",
  team = "ATL",
}) => {

  return (
    <div
      className={`flex h-fit p-2 justify-between items-center ${positionStyles[positionLogo]}`}
    >
      <Strong color={colorText} size={sizeStyles[size].text}>
        {score}
      </Strong>
      <Text color={colorText} size={sizeStyles[size].text}>
        {teamName}
      </Text>
      <TeamLogo size={sizeStyles[size].logo} team={team} />
    </div>
  );
};
