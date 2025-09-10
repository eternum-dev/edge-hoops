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
      className={`flex flex-col gap-4 p-5 rounded-3xl shadow-md shadow-neutral-700 bg-neutral-100  self-center max-h-[300px] ${className}`}
    >
      <Title>{title}</Title>
      <div className="grid grid-cols-12 gap-3 h-80">
        <DropDownMenu {...homeTeam} className="col-span-6" />
        <DropDownMenu {...visitorTeam} className="col-span-6" />
        <DropDownMenu {...season} className="col-span-12 max-w-[320px]" />
        <Button onClick={handleSearchGame} color="secondary" size="max" className="col-span-2">
          Buscar
        </Button>
      </div>
    </div>
  );
};
