import { Route, Routes } from "react-router";
import {
  HomeDashboardPage,
  Error404Page,
  FavoritesPage,
  GameDetailPage,
  TeamPage,
  SearchGamePage,
  SearchTeamPage,
} from "../component/pages";

export const AppRouter = () => {
  return (
    <Routes>
      {/* home */}
      <Route path={"/"} element={<HomeDashboardPage />} />

      {/* games */}
      <Route path={"/search-game"} element={<SearchGamePage />} />
      <Route path={"/game"} element={<GameDetailPage />} />

      {/* teams */}
      <Route path={"/search-team"} element={<SearchTeamPage />} />
      <Route path={"/team"} element={<TeamPage />} />

      {/* errors */}
      <Route path={"/404"} element={<Error404Page />} />
      
      {/* other */}
      <Route path={"/favorites"} element={<FavoritesPage />} />
    </Routes>
  );
};
