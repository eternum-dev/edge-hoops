import { useState } from "react";
import type { ShortTeamNames } from "../../types/nba";
import { TeamLogo } from "./TeamLogo";
import type { TextPosition } from "../../types";

interface OptionProps {
  textPosition?: TextPosition;
  className?: string;
  icon?: ShortTeamNames;
  children?: React.ReactNode;
  disable?: boolean;
}

const defaultStyles: string =
  "font-inter font-medium text-b2 leading-b2 px-2 py-1 bg-neutral-100 border-1 border-neutral-300 flex justify-between w-full text-neutral-1000 rounded-2xs hover:text-neutral-100 hover:bg-secondary-200 active:text-neutral-100 active:bg-secondary-300  active:bg-secondary-300 items-center";
const selectedStyles: string =
  "text-neutral-1000 bg-neutral-100 border-1 border-l-4 border-secondary-300";
const disableStyles: string =
  "!text-neutral-900 !bg-neutral-200 !border-1 !border-neutral-300";
const baseStyles: Record<TextPosition, string> = {
  left: "flex-row",
  right: "flex-row-reverse",
};

export const Option: React.FC<OptionProps> = ({
  textPosition = "left",
  className = "",
  icon,
  children = "Option",
  disable = false,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div
      className={`${defaultStyles} ${baseStyles[textPosition]} ${className} 
       ${selected && selectedStyles} ${disable && disableStyles}`}
      onClick={() => setSelected((prev) => !prev)}
    >
      <span className="font-inter font-medium text-b2 leading-b2">
        {children}
      </span>
      {icon && <TeamLogo size="small" team={icon} />}
    </div>
  );
};
