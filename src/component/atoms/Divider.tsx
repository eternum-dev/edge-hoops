import type { DividerHeigth, NeutralColor } from "../../types";

interface DividerProps {
  className?: string;
  size?: DividerHeigth;
  color?: NeutralColor;
}

const sizeStyles: Record<DividerHeigth, string> = {
  l: "h-[3px]",
  m: "h-[2px]",
  s: "h-[1px]",
};

const colorStyles: Record<NeutralColor, string> = {
  black: "bg-neutral-1000",
  white: "bg-neutral-100",
};

export const Divider: React.FC<DividerProps> = ({
  className = "",
  size = "s",
  color = "black",
}) => {
  return (
    <div
      className={`w-[35px]  my-auto mx-1 ${sizeStyles[size]} ${colorStyles[color]} ${className}`}
    ></div>
  );
};
