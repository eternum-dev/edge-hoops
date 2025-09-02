import { Button } from "../atoms";
import { DropDownMenu, type DropDownMenuProps } from "./DropDownMenu";

export interface SelectGameMatchProps {
  homeTeam: DropDownMenuProps;
  visitorTeam: DropDownMenuProps;
  season: DropDownMenuProps;
  handleSearchGame: () => void;
}

export const SelectGameMatch: React.FC<SelectGameMatchProps> = ({
  homeTeam,
  visitorTeam,
  season,
  handleSearchGame,
}) => {
  return (
    <div className="flex gap-4 p-5 rounded-3xl shadow-md shadow-neutral-700 bg-neutral-100 col-span-12 self-center h-80">
      <DropDownMenu {...homeTeam} />
      <DropDownMenu {...visitorTeam} />
      <DropDownMenu {...season} />
      <Button onClick={handleSearchGame} color="secondary">
        Buscar
      </Button>
    </div>
  );
};
