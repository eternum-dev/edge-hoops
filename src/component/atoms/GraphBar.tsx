import type { TypeColor } from "../../types";
import { Text } from "./Text";

interface GraphBarProps {
  className?: string;
  color?: TypeColor;
  height?: string;
  value: string | number;
}

const BaseStyled: Record<TypeColor, string> = {
  primary:
    "w-full max-w-[35px] h-full rounded-2xs bg-primary-300 drop-shadow-neutral-1000 drop-shadow-(--shadow-1) ",
  secondary:
    "w-full max-w-[35px] h-full rounded-2xs bg-secondary-300 drop-shadow-neutral-900 drop-shadow-sm",
};

export const GraphBar: React.FC<GraphBarProps> = ({
  className = "",
  color = "primary",
  height,
  value = "1000",
}) => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div
        style={{ height: height }}
        className={`${className}${BaseStyled[color]}`}
      ></div>
      <Text>{value}</Text>
    </div>
  );
};
