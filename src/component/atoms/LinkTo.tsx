import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

export interface LinkToProps {
  to: string;
  icon: LucideIcon;
  label: string;
  path: string;
}

export const LinkTo: React.FC<LinkToProps> = ({
  to,
  icon: Icon,
  label,
  path,
}) => {
  return (
    <Link
      key={to}
      to={to}
      className={`flex items-center gap-3 p-2 rounded-md transition-colors text-neutral-100 ${
        path === to
          ? "bg-secondary-500 text-white"
          : "hover:bg-secondary-100 hover:text-neutral-900"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
};
