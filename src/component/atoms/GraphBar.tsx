type GraphBarColor = "primary" | "secondary";

interface GraphBarProps {
  className?: string;
  color?: GraphBarColor;
  height?: string;
}

const BaseStyled: Record<GraphBarColor, string> = {
  primary:
    "w-full max-w-[35px] h-full rounded-2xs bg-primary-300 drop-shadow-neutral-1000 drop-shadow-(--shadow-1) ",
  secondary:
    "w-full max-w-[35px] h-full rounded-2xs bg-secondary-300 drop-shadow-neutral-900 drop-shadow-sm",
};

export const GraphBar: React.FC<GraphBarProps> = ({
  className = "",
  color = "primary",
  height ,
}) => {

  return <div style={{ height: height }} className={`${className}${BaseStyled[color]}`}></div>;
};
