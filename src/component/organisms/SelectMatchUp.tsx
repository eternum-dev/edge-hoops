import type { DropDownOptions } from "../../types";
import { Button, Title } from "../atoms";
import { DropDownMenu } from "./DropDownMenu";

interface SelectMatchUpProps {
  listMatchup: DropDownOptions[];
  title?: string;
}

export const SelectMatchUp: React.FC<SelectMatchUpProps> = ({
  listMatchup,
  title = "Selecciona tu equipo",
}) => {
  return (
    <section className="flex flex-col gap-4 p-5 bg-neutral-100 rounded-3xl shadow-md shadow-neutral-700">
      <header>
        <Title>{title}</Title>
      </header>
      <div className="flex gap-1">
        <DropDownMenu optionData={listMatchup} />
        <DropDownMenu optionData={listMatchup} />
        <Button
          color="secondary"
          type="button"
          onClick={() => console.log("object")}
        >
          aasdads
        </Button>
      </div>
    </section>
  );
};
