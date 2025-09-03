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
    <div className={`w-full z-20 ${className}`}>
      <button
        className={`w-full flex justify-between bg-neutral-100 p-2  border-neutral-300 border rounded-2xs items-center relative z-20 max-h-[300px]`}
        onClick={() => setIsOpenDropDown((prevValue) => !prevValue)}
      >
        <Text size="l">{label}</Text>
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
