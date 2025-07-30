type StrongSize = "s" | "m" | "l";
type StrongColor = "white" | "black";

interface StrongProps {
  size?: StrongSize;
  color?: StrongColor;
  children: React.ReactNode;
  className?: string;
}
const colorStyles: Record<StrongColor, string> = {
  black: "text-neutral-1000",
  white: "text-neutral-100",
};

const baseStyles: Record<StrongSize, string> = {
  l: "font-inter font-bold text-h5 leading-h5",
  m: "font-inter font-bold text-h7 leading-h7",
  s: "font-inter font-medium text-b1 leading-b1",
};

export const Strong: React.FC<StrongProps> = ({
  size = "l",
  color = "black",
  className = "",
  children,
}) => {
  return (
    <strong
      className={`${baseStyles[size]} ${colorStyles[color]} ${className}`}
    >
      {children}
    </strong>
  );
};
