import type { ShortTeamNames } from "../../types";
import { Button, InputSearch, Title } from "../atoms";
import { DropDownMenu } from "./DropDownMenu";

export interface SearchTeamProps {
  placeholder?: string;
  optionsData: { label: string; icon?: ShortTeamNames }[];
  onClick: () => void;
  className?: string;
}

export const SearchTeam: React.FC<SearchTeamProps> = ({
  placeholder = "Ingrese un equipo",
  optionsData,
  onClick,
  className = "",
}) => {
  return (
    <form
      className={`grid grid-cols-6 items-start h-full gap-4 bg-neutral-100 shadow-md shadow-neutral-700 p-5  rounded-[30px] ${className}`}
      onSubmit={(sub) => {
        sub.preventDefault();

        const input = sub.currentTarget.elements.namedItem(
          "inputSearch"
        ) as HTMLInputElement;
        console.log(input.value);
      }}
    >
      <Title className="col-span-6"> Busca tu equipo </Title>
      <InputSearch
        placeholder={placeholder}
        className="col-span-4"
        name="inputSearch"
      />
      <DropDownMenu optionData={optionsData} className="col-span-2" />
      <Button type="submit" onClick={onClick} color="secondary" size="max" className="col-span-1">
        Buscar
      </Button>
    </form>
  );
};
