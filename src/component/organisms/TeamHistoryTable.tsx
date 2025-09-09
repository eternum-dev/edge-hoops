import { Title } from "../atoms";
import { ColumTable } from "../molecules";
import type { DefinitionProps, TableData } from "../../types";
import { StatsGlossary } from "./StatsGlossary";

export interface TeamHistoryTableProps {
  title?: string;
  tableData: TableData[];
  glossary: DefinitionProps[];
  className?: string;
}

export const TeamHistoryTable: React.FC<TeamHistoryTableProps> = ({
  title = "Ultimos 5 juegos",
  tableData = [],
  glossary = [],
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col w-full gap-4 bg-neutral-100 p-5 rounded-3xl shadow-md shadow-neutral-700 ${className}`}
    >
      <header className="flex justify-between items-center">
        <Title type="h2">{title}</Title>
      </header>
      <div className="flex">
        {tableData.map((item, index) => (
          <ColumTable
            cellContent={item.body}
            headerText={item.header}
            typeColum={item.type}
            key={index}
          />
        ))}
      </div>
      <StatsGlossary glossaryData={glossary} />
    </section>
  );
};
