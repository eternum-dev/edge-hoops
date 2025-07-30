type TitleType = "h1" | "h2" | "h3" | "h4";
type TitleColor = "black" | "white";

interface TitleProps {
  type?: TitleType;
  color?: TitleColor;
  children: React.ReactNode;
  className?: string;
}

const baseStyles: Record<TitleType, string> = {
  h1: "text-h1 leading-h1 font-bold",
  h2: "text-h4 leading-h4 font-bold",
  h3: "text-h5 leading-h5 font-bold",
  h4: "text-h7 leading-h7 font-medium",
};

const colorStyles: Record<TitleColor, string> = {
  black: "text-neutral-1000",
  white: "text-neutral-100",
};

export const Title: React.FC<TitleProps> = ({
  type = "h2",
  color = "black",
  children,
  className = "",
}) => {
  const Tag = type as keyof React.JSX.IntrinsicElements;

  return (
    <Tag className={`${baseStyles[type]} ${colorStyles[color]} ${className}`}>
      {children}
    </Tag>
  );
};
