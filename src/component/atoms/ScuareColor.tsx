import type { TypeColor } from "../../types";

interface ScuareColorProps {
  colorBox: TypeColor;
  className?: string;
}

const colorBoxStyles: Record<TypeColor, string> = {
  secondary: "bg-secondary-300",
  primary: "bg-primary-300",
};

export const ScuareColor: React.FC<ScuareColorProps> = ({
  colorBox = "secondary",
  className = "",
}) => {
  return (
    <div
      className={`w-[20px] h-[20px] shadow-neutral-1000 shadow-xs rounded-2xs ${colorBoxStyles[colorBox]} ${className}`}
    ></div>
  );
};
