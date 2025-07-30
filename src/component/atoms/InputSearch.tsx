import { useState } from "react";

interface InputSearchProps {
  placeholder: string;
  label?: string;
  className?: string;
  error?: boolean;
  disable?: boolean;
}

const errorStyles: string =
  "bg-red-100 border-1 border-red-200 text-neutral-1000";
const disableStyles: string =
  "!text-neutral-900 !bg-neutral-200 !border-1 !border-neutral-300";
const baseStyles =
  "bg-neutral-100 rounded-2xs drop-shadow-neutral-900 drop-shadow-sm placeholder:text-neutral-800 font-inter font-regular text-b1 leading-b1 p-3 w-full text-neutral-900 hover:bg-neutral-200 text-neutral-900 focus:bg-neutral-100 focus:text-neutral-1000 border-1 border-secondary-300";

export const InputSearch: React.FC<InputSearchProps> = ({
  placeholder = "placeholder",
  label = "",
  className = "",
  error,
  disable = false,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <label>
      {label}
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        className={`${className} ${baseStyles} ${error && errorStyles} ${
          disable && disableStyles
        }`}
        onChange={(event) => setInputValue(event.currentTarget.value)}
      />
    </label>
  );
};
