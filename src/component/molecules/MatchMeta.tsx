import type {
  DateSize,
  MoleculesSize,
  ShortTeamNames,
  TeamLogoSize,
  TextColor,
  TextSize,
} from "../../types";
import { Date, TeamLogo, Text } from "../atoms";

export interface MatchMetaProps {
  textColor?: TextColor;
  size?: MoleculesSize;
  stadium: string;
  date: string;
  winnerTeamCode: ShortTeamNames;
  className?: string;
}

const textSizeStyles: Record<MoleculesSize, TextSize> = {
  small: "m",
  full: "l",
};

const dateSizeStyles: Record<MoleculesSize, DateSize> = {
  small: "s",
  full: "m",
};

const teamLogoSizeStyles: Record<MoleculesSize, TeamLogoSize> = {
  small: "small",
  full: "small",
};

export const MatchMeta: React.FC<MatchMetaProps> = ({
  textColor = "black",
  size = "small",
  stadium,
  date,
  winnerTeamCode,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-6 gap-2 items-center w-full justify-between py-0.5 ${className}`}
    >
      <div className="flex gap-3 col-span-2 items-center">
        <Text color={textColor} size={textSizeStyles[size]}>
          ganador
        </Text>
        <TeamLogo size={teamLogoSizeStyles[size]} team={winnerTeamCode} />
      </div>

      <Date
        textColor={textColor}
        size={dateSizeStyles[size]}
        className="text-center col-span-2"
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
