import type { ButtonType, TypeColor, WidthSize } from "../../types";

interface ButtonProps {
  size?: WidthSize;
  color?: TypeColor;
  className?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: ButtonType;
}

const baseStyles: Record<WidthSize, string> = {
  fit: "rounded-2xs font-inter font-regular leading-b3 text-b3 px-2 py-1.5 h-fit",
  max: "rounded-2xs font-inter font-regular leading-b3 text-b3 px-2 py-1.5 h-full max-h-[45px]",
};

const colorStyles: Record<TypeColor, string> = {
  primary:
    "bg-primary-300 text-neutral-100 hover:bg-primary-400 active:bg-primary-200 disabled:bg-neutral-300 disabled:text-neutral-900",
  secondary:
    "bg-secondary-300 text-neutral-100 hover:bg-secondary-400 active:bg-primary-200 disabled:bg-neutral-300 disabled:text-neutral-900",
};

export const Button: React.FC<ButtonProps> = ({
  size = "fit",
  color = "primary",
  className = "",
  children = "00/00/00",
  onClick,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${baseStyles[size]} ${colorStyles[color]} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
