import { Button, Title } from "../atoms";
import { ColumTable } from "../molecules";
import type { TableData } from "../../types";

export interface GameMatchTableProps {
  title?: string;
  tableData: TableData[];
  gamesButtons: string[];
  changeGraph: (idButton: string) => void;
  className?: string;
}

export const GameMatchTable: React.FC<GameMatchTableProps> = ({
  title = "",
  tableData,
  gamesButtons,
  changeGraph,
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col w-full gap-4 bg-neutral-100 p-5 rounded-3xl shadow-md shadow-neutral-700 ${className}`}
    >
      <header className="flex justify-between items-center">
        <Title type="h2">{title ? title : "Lista de partidos"} </Title>
      </header>
      <div className="flex gap-1">
        <div className="flex w-full">
          {tableData.map((item, index) => (
            <ColumTable
              cellContent={item.body}
              headerText={item.header}
              typeColum={item.type}
              key={index}
            />
          ))}
        </div>
        <div className="grid row-auto w-[36px]  gap-[1px]">
          <div className="w-full h-[30px]"></div>
          {gamesButtons.map((button) => (
            <Button
              size="fit"
              onClick={() => changeGraph(button)}
              className="h-full"
              type="button"
            >
              ir
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
