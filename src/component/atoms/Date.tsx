import type { DateSize, TextColor } from "../../types";

interface DateProps {
  size?: DateSize;
  className?: string;
  children: React.ReactNode;
  textColor?: TextColor;
}

const baseStyles: Record<DateSize, string> = {
  m: "font-oswald font-medium leading-h7 text-h7",
  s: "font-inter font-medium leading-b2 text-b2",
};

const TextColorStyles: Record<TextColor, string> = {
  black: "text-neutral-1000",
  white: "text-neutral-100",
};

export const Date: React.FC<DateProps> = ({
  size = "s",
  className = "",
  children,
  textColor = "black",
}) => {
  return (
    <p
      className={`${baseStyles[size]} ${TextColorStyles[textColor]} ${className}`}
    >
      {children}
    </p>
  );
};
