import type { CellContentType, CellType } from "../../types";
import type { ShortTeamNames } from "../../types/nba";
import { TeamLogo } from "./TeamLogo";

export interface TableCellProps {
  cellType?: CellType;
  contentType?: CellContentType;
  className?: string;
  children?: React.ReactNode;
  icon?: ShortTeamNames | undefined;
}

const baseStyles = `text-b1 font-medium leading-b1`;

const cellTypeStyles: Record<CellType, string> = {
  body: "w-fit h-fit px-2 py-1 text-neutral-1000 bg-neutral-100 flex",
  header: "w-fit h-fit px-2 py-1 text-neutral-100 bg-secondary-300",
};

const contentTypeStyles: Record<CellContentType, string> = {
  date: "font-oswald",
  team: "font-inter",
  text: "font-inter",
};

export const TableCell: React.FC<TableCellProps> = ({
  cellType = "body",
  contentType = "text",
  className = "",
  children = "",
  icon = "ATL",
}) => {
  const isTypeTeamBody: boolean = contentType === "team" && cellType === "body";
  children = isTypeTeamBody ? icon : children;

  return (
    <div
      className={`${className} ${cellTypeStyles[cellType]} ${contentTypeStyles[contentType]} ${baseStyles}`}
    >
      {children} {isTypeTeamBody && <TeamLogo size={"verySmall"} team={icon} />}
    </div>
  );
};
