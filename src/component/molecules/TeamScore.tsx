import type { MoleculesSize, PositionLogo, TextColor } from "../../types";
import type { ShortTeamNames } from "../../types/nba";
import { Strong, TeamLogo, Text } from "../atoms";

type SizeStylesTypes = { text: "m" | "l"; logo: "small" | "medium" };

interface TeamScoreProps {
  positionLogo?: PositionLogo;
  colorText?: TextColor;
  size?: MoleculesSize;
  score?: string | number;
  teamName?: string;
  team: ShortTeamNames;
}

const positionStyles: Record<PositionLogo, string> = {
  left: "flex-row-reverse",
  right: "flex-row",
};

const sizeStyles: Record<MoleculesSize, SizeStylesTypes> = {
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
      className={`w-full flex h-fit gap-1 justify-between items-center ${positionStyles[positionLogo]}`}
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
