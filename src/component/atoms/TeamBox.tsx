import type { TypeColor } from "../../types";

interface TeamBoxProps {
  color?: TypeColor;
  className?: string;
}

const colorStyles: Record<TypeColor, string> = {
  primary: "bg-primary-300 font-oswald font-bold text-h7 leading-h7",
  secondary: "bg-secondary-300 font-inter font-medium text-b1 leading-b1",
};

const baseStyle = "text-neutral-900 w-[22px] h-[22px] rounded-2xs";

export const TeamBox: React.FC<TeamBoxProps> = ({
  color = "primary",
  className = "",
}) => {
  return (
    <div className={`${baseStyle} ${colorStyles[color]} ${className} `}></div>
  );
};
