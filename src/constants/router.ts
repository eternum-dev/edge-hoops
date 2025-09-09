import {
  LayoutDashboard,
  Search,
  Trophy,
  Users,
  Shirt,
  Star,
} from "lucide-react";

export const linksPages = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/search-game", label: "Search Game", icon: Search },
  { to: "/game", label: "Game Detail", icon: Trophy },
  { to: "/search-team", label: "Search Team", icon: Users },
  { to: "/team", label: "Team Detail", icon: Shirt },
  { to: "/favorites", label: "Favorites", icon: Star },
];
