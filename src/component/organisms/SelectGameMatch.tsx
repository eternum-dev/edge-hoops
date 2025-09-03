import { Button, Title } from "../atoms";
import { DropDownMenu, type DropDownMenuProps } from "./DropDownMenu";

export interface SelectGameMatchProps {
  homeTeam: DropDownMenuProps;
  visitorTeam: DropDownMenuProps;
  season: DropDownMenuProps;
  handleSearchGame: () => void;
  title?: string;
  className?: string;
}

export const SelectGameMatch: React.FC<SelectGameMatchProps> = ({
  homeTeam,
  visitorTeam,
  season,
  handleSearchGame,
  title = "Selecciona los equipos",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col  gap-4 p-5 rounded-3xl shadow-md shadow-neutral-700 bg-neutral-100  self-center max-h-[300px] ${className}`}
    >
      <Title>{title}</Title>
      <div className="flex gap-3 h-80">
        <DropDownMenu {...homeTeam} />
        <DropDownMenu {...visitorTeam} />
        <DropDownMenu {...season} />
        <Button onClick={handleSearchGame} color="secondary" size="max">
          Buscar
        </Button>
      </div>
    </div>
  );
};
