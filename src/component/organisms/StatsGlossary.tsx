import type { DefinitionProps } from "../../types";
import { Title } from "../atoms";
import { Definition } from "../molecules";

export interface StatsGlossary {
  title?: string;
  glossaryData: DefinitionProps[];
}

export const StatsGlossary: React.FC<StatsGlossary> = ({
  title,
  glossaryData,
}) => {
  return (
    <footer className="flex flex-col bg-neutral-100">
      <header>
        <Title type="h4">{title ? title : "Definiciones"}</Title>
      </header>
      <div className="flex w-full justify-between gap-0">
        {glossaryData.map(({ abbreviation, fullWord }) => (
          <Definition abbreviation={abbreviation} fullWord={fullWord} />
        ))}
      </div>
    </footer>
  );
};
