import * as Icons from "./icons";

type IconNames = "Arrow" | "Fire";
type IconSize = "small" | "medium" | "full";
type IconComponentKeys = `${IconNames}Icon`;

interface IconProps {
  icon?: IconNames;
  size?: IconSize;
}

const baseSizeIcon: Record<IconSize, number> = {
  full: 32,
  medium: 24,
  small: 16,
};

export const Icon: React.FC<IconProps> = ({
  icon = "Arrow",
  size = "small",
}) => {
  const keyIcon = `${icon.charAt(0).toUpperCase()}${icon
    .slice(1)
    .toLowerCase()}Icon` as IconComponentKeys;

  const Icon = Icons[keyIcon];
  if (!Icon) return <div>Icon not found: {icon}</div>;

  return <Icon size={baseSizeIcon[size]} />;
};
