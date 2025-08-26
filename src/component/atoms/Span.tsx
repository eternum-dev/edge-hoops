import type { FontTypes, SpanColor, SpanSize } from "../../types";

interface SpanProps {
  children: React.ReactNode;
  className?: string;
  color?: SpanColor;
  font?: FontTypes;
  size?: SpanSize;
}

const colorStyles: Record<SpanColor, string> = {
  primary: "text-primary-300",
  secondary: "text-secondary-300",
  neutral: "text-neutral-700",
};

const fontStyles: Record<FontTypes, string> = {
  inter: "font-inter",
  oswald: "font-oswald",
};

const sizeStyles: Record<SpanSize, string> = {
  l: "text-h5 font-bold ml-3",
  m: "text-h7 font-medium ml-1.5",
  s: "text-b2 font-regular ml-1",
};

export const Span: React.FC<SpanProps> = ({
  children,
  className = "",
  color = "neutral",
  font = "inter",
  size = "s",
}) => {
  return (
    <span
      className={`${sizeStyles[size]} ${colorStyles[color]} ${fontStyles[font]} ${className}`}
    >
      {children}
    </span>
  );
};
