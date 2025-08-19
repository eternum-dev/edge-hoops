import type { StatBoxColor, StatValue, TextColor, TextPosition } from "../../types";
import { Strong, Text } from "../atoms";

interface StatBoxProps {
  textPosition?: TextPosition;
  color?: StatBoxColor;
  title?: string;
  value?: StatValue;
}

const textPositionStyles: Record<TextPosition, string> = {
  left: "flex-row",
  right: "flex-row-reverse",
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
      <Text color={textColorStyles[color]} size="m">
        {title}
      </Text>
      <Strong color={textColorStyles[color]} size="s">
        {value}
      </Strong>
    </div>
  );
};
