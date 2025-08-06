import { useState } from "react";
import { Icon, Text } from "../atoms";

interface DropDownMenuProps {
  label: string;
  className: string;
  children: React.ReactNode;
}

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  label,
  className,
  children,
}) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  return (
    <div className="p-1.5 w-full">
      <button
        className={`w-full h-[40px] flex justify-between bg-neutral-100 px-2 py-1.5 drop-shadow-neutral-1000 drop-shadow-sm mb-1 rounded-2xs ${className} items-center`}
        onClick={() => setIsOpenDropDown((prevValue) => !prevValue)}
      >
        <Text size="m">{label}</Text>
        <Icon icon="Arrow" />
      </button>
      {isOpenDropDown && <>{children}</>}
    </div>
  );
};
