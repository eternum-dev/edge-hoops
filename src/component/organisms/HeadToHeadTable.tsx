import { Title } from "../atoms";
import { ColumTable, MatchUpTeam } from "../molecules";
import { StatsGlossary } from "./";
import type { DefinitionProps, MatchUpData, TableData } from "../../types";

interface HeadToHeadTableProps {
  title?: string;
  matchup: MatchUpData;
  tableData: TableData[];
  glossary: DefinitionProps[];
}

export const HeadToHeadTable: React.FC<HeadToHeadTableProps> = ({
  title = "",
  matchup,
  tableData,
  glossary,
}) => {
  return (
    <section className="flex flex-col w-full gap-4 bg-neutral-100 p-5 rounded-3xl shadow-md shadow-neutral-700">
      <header className="flex justify-between items-center">
        <Title type="h2">{title ? title : "Head to Head"} </Title>
        <MatchUpTeam
          leftTeam={matchup.leftTeam}
          rightTeam={matchup.rightTeam}
        />
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
