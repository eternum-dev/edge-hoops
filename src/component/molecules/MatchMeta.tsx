import type { ShortTeamNames, TeamLogoSize } from "../../types";
import { Date, TeamLogo, Text, type DateSize, type TextSize } from "../atoms";

type MatchMetaTextColor = "white" | "black";
type MatchMetaSize = "small" | "full";

interface MatchMetaProps {
  textColor?: MatchMetaTextColor;
  size?: MatchMetaSize;
  stadium: string;
  date: string;
  winnerTeamCode: ShortTeamNames;
}

const textSizeStyles: Record<MatchMetaSize, TextSize> = {
  small: "m",
  full: "l",
};

const dateSizeStyles: Record<MatchMetaSize, DateSize> = {
  small: "s",
  full: "m",
};

const teamLogoSizeStyles: Record<MatchMetaSize, TeamLogoSize> = {
  small: "small",
  full: "medium",
};

export const MatchMeta: React.FC<MatchMetaProps> = ({
  textColor = "black",
  size = "small",
  stadium,
  date,
  winnerTeamCode,
}) => {
  return (
    <div className="grid grid-cols-5 gap-1 items-center w-full justify-between py-0.5 px-2">
      <Text color={textColor} size={textSizeStyles[size]}>
        ganador
      </Text>
      <TeamLogo size={teamLogoSizeStyles[size]} team={winnerTeamCode} />
      <Date
        textColor={textColor}
        size={dateSizeStyles[size]}
        className="text-center"
      >
        {date}
      </Date>
      <Text
        color={textColor}
        size={textSizeStyles[size]}
        className="col-span-2 text-end"
      >
        {stadium}
      </Text>
    </div>
  );
};
