import type { DropDownOptions } from "../../types";
import { Option } from "../atoms";
import { DropDownSelect } from "../molecules";

export interface DropDownMenuProps {
  optionData: DropDownOptions[];
  className?: string;
  placeholder?: string;
}

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  optionData,
  className,
  placeholder = "Selecciona tu equipo",
}) => {
  return (
    <DropDownSelect label={placeholder} className={className}>
      <div className="flex flex-col gap-0 px-2 pt-2 pb-2.5 z-10 absolute  bottom-[-135px] w-full rounded-b-xs max-h-[140px]  border overflow-hidden border-neutral-300 bg-neutral-200">
        <div className="flex flex-col gap-0  overflow-y-scroll scroll-smooth pr-1.5 mr-0.5">
          {optionData.map(({ label, team }, index) => (
            <Option textPosition="left" key={index} icon={team}>
              {label}
            </Option>
          ))}
        </div>
      </div>
    </DropDownSelect>
  );
};
