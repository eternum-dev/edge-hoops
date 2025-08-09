import type { TextColor, TitleTagType } from "../../types";

interface TitleProps {
  type?: TitleTagType;
  color?: TextColor;
  children: React.ReactNode;
  className?: string;
}

const baseStyles: Record<TitleTagType, string> = {
  h1: "text-h1 leading-h1 font-bold",
  h2: "text-h4 leading-h4 font-bold",
  h3: "text-h5 leading-h5 font-bold",
  h4: "text-h7 leading-h7 font-medium",
};

const colorStyles: Record<TextColor, string> = {
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
