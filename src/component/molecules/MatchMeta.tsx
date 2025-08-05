import { Date, TeamLogo, Text, type DateSize, type TextSize } from "../atoms";

type MatchMetaTextColor = "white" | "black";
type MatchMetaSize = "small" | "full";

interface MatchMetaProps {
  textColor?: MatchMetaTextColor;
  size?: MatchMetaSize;
}

const textSizeStyles: Record<MatchMetaSize, TextSize> = {
  small: "m",
  full: "l",
};

const dateSizeStyles: Record<MatchMetaSize, DateSize> = {
  small: "s",
  full: "m",
};

export const MatchMeta: React.FC<MatchMetaProps> = ({
  textColor = "black",
  size = "small",
}) => {
  return (
    <div className="flex gap-1 items-center w-full justify-between py-0.5 px-2 bg-neutral-700">
      <Text color={textColor} size={textSizeStyles[size]}>
        equipo
      </Text>
      <TeamLogo  size="small" team="CHI"/>
      <Date textColor={textColor} size={dateSizeStyles[size]}>
        01/07/25
      </Date>
      <Text color={textColor} size={textSizeStyles[size]}>
        estadio
      </Text>
    </div>
  );
};
