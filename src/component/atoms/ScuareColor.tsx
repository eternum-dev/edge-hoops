type ColorBoxTypes = "orange" | "blue";

interface ScuareColorProps {
  colorBox: ColorBoxTypes;
  className?: string;
}

const colorBoxStyles: Record<ColorBoxTypes, string> = {
  blue: "bg-secondary-300",
  orange: "bg-primary-300",
};

export const ScuareColor: React.FC<ScuareColorProps> = ({
  colorBox = "blue",
  className = "",
}) => {
  return (
    <div
      className={`w-[20px] h-[20px] shadow-neutral-1000 shadow-xs rounded-2xs ${colorBoxStyles[colorBox]} ${className}`}
    ></div>
  );
};
