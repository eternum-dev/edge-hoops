import { useState } from "react";

interface InputSearchProps {
  placeholder: string;
  label?: string;
  className?: string;
  error?: boolean;
  disable?: boolean;
  name?: string;
}

const errorStyles: string =
  "bg-red-100 border-1 border-red-200 text-neutral-1000";
const disableStyles: string =
  "!text-neutral-900 !bg-neutral-200 !border-1 !border-neutral-300";
const baseStyles =
  "bg-neutral-100 rounded-2xs drop-shadow-neutral-900 drop-shadow-sm placeholder:text-neutral-800 font-inter font-regular text-b3 leading-b3 px-2 py-1.5 w-full text-neutral-900 hover:bg-neutral-200 text-neutral-900 focus:bg-neutral-100 focus:text-neutral-1000 focus:border-1 focus:border-secondary-300";

export const InputSearch: React.FC<InputSearchProps> = ({
  placeholder = "placeholder",
  label = "",
  className = "",
  error,
  disable = false,
  name = "",
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const inputSearchSyles = `${baseStyles} ${error && errorStyles} ${
    disable && disableStyles
  }`;

  return (
    <label className={className}>
      {label}
      <input
        name={name}
        type="text"
        value={inputValue}
        placeholder={placeholder}
        className={inputSearchSyles}
        onChange={(event) => setInputValue(event.currentTarget.value)}
      />
    </label>
  );
};
