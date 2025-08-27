import type { ShortTeamNames } from "../../types";
import { Button, InputSearch } from "../atoms";
import { DropDownMenu } from "./DropDownMenu";

interface SearchTeamProps {
  placeholder?: string;
  optionsData: { label: string; icon?: ShortTeamNames }[];
  onClick: () => void;
}

export const SearchTeam: React.FC<SearchTeamProps> = ({
  placeholder = "Ingrese un equipo",
  optionsData,
  onClick,
}) => {
  return (
    <form
      className="grid grid-cols-5 gap-4 bg-neutral-100 shadow-md shadow-neutral-700 p-5  rounded-[30px]"
      onSubmit={(sub) => {
        sub.preventDefault();
        
        const input = sub.currentTarget.elements.namedItem(
          "inputSearch"
        ) as HTMLInputElement;
        console.log(input.value);
      }}
    >
      <InputSearch
        placeholder={placeholder}
        className="col-span-2"
        name="inputSearch"
      />
      <DropDownMenu optionData={optionsData} className="col-span-2" />
      <Button type="submit" onClick={onClick} color="primary" size="fit">
        Buscar
      </Button>
    </form>
  );
};
