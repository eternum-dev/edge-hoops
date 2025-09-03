import type { TypeColor } from "../../types";
import { Text } from "./Text";

interface GraphBarProps {
  className?: string;
  color?: TypeColor;
  height: string | number;
  value: string | number;
}

const BaseStyled: Record<TypeColor, string> = {
  primary:
    "w-full min-w-[15px] max-w-[50px] h-full rounded-2xs bg-primary-300 drop-shadow-neutral-1000 drop-shadow-(--shadow-1) ",
  secondary:
    "w-full min-w-[15px] max-w-[50px] h-full rounded-2xs bg-secondary-300 drop-shadow-neutral-900 drop-shadow-sm",
};

export const GraphBar: React.FC<GraphBarProps> = ({
  className = "",
  color = "primary",
  height,
  value = "1000",
}) => {
  const newHeight = Number(height) / 100;

  return (
    <div className="flex flex-col w-full h-full justify-end items-center">
      <div
        style={{ height: `calc(calc(100% - 30px) * ${newHeight} )` }}
        className={`${className} ${BaseStyled[color]}`}
      ></div>
      <Text size="m">{value}</Text>
    </div>
  );
};
