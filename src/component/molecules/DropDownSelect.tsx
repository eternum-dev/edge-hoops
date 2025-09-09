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
    <div className={`w-full relative h-fit ${className}`}>
      <button
        className={`w-full relative -z-0 flex justify-between bg-neutral-100 p-2  border-neutral-300 border rounded-2xs items-center  max-h-[300px]`}
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
