import type { ShortTeamNames } from "../../types/nba";
import { Option } from "../atoms";
import { type TextPosition } from "../../types/ui";

type ArrayListType = {
  team: ShortTeamNames;
  label: string;
};

interface ListOptionProps {
  ArrayList: Array<ArrayListType>;
  textPosition?: TextPosition;
}

export const ListOption: React.FC<ListOptionProps> = ({
  ArrayList = [],
  textPosition = "left",
}) => {
  return (
    <div className="flex flex-col gap-0 px-1 py-1">
      {ArrayList.map(({ label, team }) => (
        <Option icon={team} textPosition={textPosition}>
          {label}
        </Option>
      ))}
    </div>
  );
};
