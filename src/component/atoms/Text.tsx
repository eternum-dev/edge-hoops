type TextSize = "s" | "m" | "l" | "xl";
type TextColor = "black" | "white";

interface TextProps {
  size?: TextSize;
  color?: TextColor;
  className?: string;
  children: React.ReactNode;
}

const baseStyle: Record<TextSize, string> = {
  s: "h-fit font-inter font-medium text-b5 leading-b5",
  m: "h-fit font-inter font-medium text-b3 leading-b3",
  l: "h-fit font-inter font-medium text-b1 leading-b1",
  xl: "h-fit font-inter font-medium text-h7 leading-h7",
};

const colorStyles: Record<TextColor, string> = {
  black: "text-neutral-1000",
  white: "text-neutral-100",
};

export const Text: React.FC<TextProps> = ({
  size = "xl",
  color = "black",
  className,
  children,
}) => {
  return (
    <p className={`${baseStyle[size]} ${colorStyles[color]} ${className}`}>
      {children}
    </p>
  );
};
