import {
  GameMatchTable,
  SelectGameMatch,
  type GameMatchTableProps,
  type SelectGameMatchProps,
} from "../organisms";

export interface SearchGameTemplateProps {
  selectGame: SelectGameMatchProps;
  gamesTable: GameMatchTableProps;
}

export const SearchGameTemplate: React.FC<SearchGameTemplateProps> = ({
  selectGame,
  gamesTable,
}) => {
  return (
    <div className="grid grid-cols-12 grid-rows-2 h-full max-h-lvh gap-4 p-5 ">
      <SelectGameMatch {...selectGame}  className="col-span-12"/>
      <GameMatchTable {...gamesTable} className="col-span-12" />
    </div>
  );
};
