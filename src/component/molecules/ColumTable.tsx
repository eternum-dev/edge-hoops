import type { ColumTableContent } from "../../types";
import { TableCell, type TableCellProps } from "../atoms/TableCell";


interface ColumTableProps {
  typeColum?: ColumTableContent;
  className?: string;
  headerText: string;
  cellContent: Array<TableCellProps>;
}

export const ColumTable: React.FC<ColumTableProps> = ({
  typeColum = "text",
  className = "",
  headerText = "text",
  cellContent = [],
}) => {
  return (
    <div className={`w-full ${className}`}>
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
