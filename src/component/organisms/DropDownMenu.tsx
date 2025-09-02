import type { DropDownOptions } from "../../types";
import { Option } from "../atoms";
import { DropDownSelect } from "../molecules";

export interface DropDownMenuProps {
  optionData: DropDownOptions[];
  className?: string;
  placeholder?: string
}

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  optionData,
  className,
  placeholder = "Selecciona tu equipo"
}) => {
  return (
    <DropDownSelect label={placeholder} className={className} >
      <div className="flex flex-col gap-0 px-1.5 py-2.5 bg-neutral-100 z-10 relative bottom-0 rounded-b-xs max-h-60 overflow-y-scroll scroll-smooth">
        {optionData.map(({ label, team }, index) => (
          <Option textPosition="left" key={index} icon={team}>
            {label}
          </Option>
        ))}
      </div>
    </DropDownSelect>
  );
};
