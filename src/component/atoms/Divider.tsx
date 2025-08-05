type DividerSize = "s" | "m" | "l";

interface DividerProps {
  className?: string;
  size?: DividerSize;
}

const sizeStyled: Record<DividerSize, string> = {
  l: "h-[3px]",
  m: "h-[2px]",
  s: "h-[1px]",
};

export const Divider: React.FC<DividerProps> = ({
  className = "",
  size = "s",
}) => {
  return (
    <div className={`w-full  bg-neutral-1000 my-auto mx-1 ${sizeStyled[size]} ${className}`}></div>
  );
};
