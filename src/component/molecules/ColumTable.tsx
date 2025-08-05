import type { ShortTeamNames } from "../../types/nba";
import { TableCell } from "../atoms/TableCell";

type ColumTableContent = "text" | "date" | "team";

interface TableCellProps {
  className?: string;
  children?: React.ReactNode;
  icon?: ShortTeamNames;
}

interface ColumTableProps {
  typeColum?: ColumTableContent;
  className?: string;
  headerText?: string;
  cellContent?: Array<TableCellProps>;
}

export const ColumTable: React.FC<ColumTableProps> = ({
  typeColum = "text",
  className = "",
  headerText = "text",
  cellContent = [],
}) => {
  return (
    <div className={className}>
      <TableCell cellType="header" contentType={typeColum}>
        {headerText}
      </TableCell>
      {cellContent?.map((content, index) => (
        <TableCell
          cellType="body"
          contentType={typeColum}
          icon={content.icon}
          key={index}
        >
          {content.children}
        </TableCell>
      ))}
    </div>
  );
};
