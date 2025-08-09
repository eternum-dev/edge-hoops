import type { IconComponentKeys, IconNames, IconSize } from "../../types";
import * as Icons from "./icons";

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
