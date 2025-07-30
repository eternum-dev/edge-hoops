type DateSize = "max" | "fit";

interface DateProps {
  size?: DateSize;
  className?: string;
  children: React.ReactNode;
}

const baseStyles: Record<DateSize, string> = {
  max: "font-oswald font-bold leading-h7 text-h7",
  fit: "font-inter font-medium leading-b1 text-b1",
};

export const Date: React.FC<DateProps> = ({
  size = "fit",
  className = "",
  children,
}) => {
  return <p className={`${baseStyles[size]}${className}`}>{children}</p>;
};
