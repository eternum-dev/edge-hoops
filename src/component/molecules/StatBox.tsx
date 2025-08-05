import { Strong, Text, type TextColor } from "../atoms";

type StatBoxTextPosition = "left" | "rigth";
type StatBoxColor = "white" | "blue";

interface StatBoxProps {
  textPosition?: StatBoxTextPosition;
  color?: StatBoxColor;
  title?: string;
  value?: number | string;
}

const textPositionStyles: Record<StatBoxTextPosition, string> = {
  left: "flex-row",
  rigth: "flex-row-reverse",
};

const colorStyles: Record<StatBoxColor, string> = {
  blue: "bg-secondary-300",
  white: "bg-neutral-100",
};

const textColorStyles: Record<StatBoxColor, TextColor> = {
  blue: "white",
  white: "black",
};

export const StatBox: React.FC<StatBoxProps> = ({
  textPosition = "left",
  color = "white",
  title = "puntos",
  value = "0",
}) => {
  return (
    <div
      className={`w-fit h-fit gap-2 flex px-1 py-0 rounded-2xs items-end drop-shadow-neutral-1000 drop-shadow-sm ${textPositionStyles[textPosition]} ${colorStyles[color]}`}
    >
      <Text color={textColorStyles[color]} size="s">
        {title}
      </Text>
      <Strong color={textColorStyles[color]} size="s">
        {value}
      </Strong>
    </div>
  );
};
