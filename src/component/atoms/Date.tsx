export type DateSize = "s" | "m";
export type DateTextColor = "white" | "black";

interface DateProps {
  size?: DateSize;
  className?: string;
  children: React.ReactNode;
  textColor?: DateTextColor;
}

const baseStyles: Record<DateSize, string> = {
  m: "font-oswald font-bold leading-h7 text-h7",
  s: "font-inter font-medium leading-b1 text-b1",
};

const TextColorStyles: Record<DateTextColor, string> = {
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
