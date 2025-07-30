type TableCellType = "header" | "body";
type TableCellContentType = "text" | "date" | "team";

interface TableCellProps {
  cellType?: TableCellType;
  contentType?: TableCellContentType;
  className?: string;
  children?: React.ReactNode;
  icon?: string;
}

const baseStyled: Record<TableCellType, string> = {
  body: "w-fit h-fit px-2 py-1 text-b1 font-inter font-medium leading-b1 text-neutral-1000 bg-neutral-100",
  header:
    "w-fit h-fit px-2 py-1 text-b1 font-inter font-medium leading-b1 text-neutral-100 bg-secondary-300",
};

const defaultContent: Record<TableCellContentType, string> = {
  date: "date",
  team: "team",
  text: "text",
};

export const TableCell: React.FC<TableCellProps> = ({
  cellType = "body",
  contentType = "text",
  className = "",
  children = "",
  icon,
}) => {
  children = contentType === "team" ? "np" : defaultContent[contentType];

  return (
    <div className={`${className} ${baseStyled[cellType]}`}>
      {children} {icon && icon}
    </div>
  );
};
