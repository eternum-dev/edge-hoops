import { useState } from "react";
import { Icon, Text } from "../atoms";

interface DropDownSelectProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}

export const DropDownSelect: React.FC<DropDownSelectProps> = ({
  label,
  className,
  children,
}) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  return (
    <div className={`w-full  ${className}`}>
      <button
        className={`w-full flex justify-between bg-neutral-100 px-2 py-1.5 drop-shadow-neutral-1000 drop-shadow-sm rounded-2xs items-center relative z-20`}
        onClick={() => setIsOpenDropDown((prevValue) => !prevValue)}
      >
        <Text size="m">{label}</Text>
        <Icon
          icon="Arrow"
          className={`${
            isOpenDropDown && "rotate-90 transition-transform"
          } rotate-0 transition-transform`}
        />
      </button>
      {isOpenDropDown && <>{children}</>}
    </div>
  );
};
