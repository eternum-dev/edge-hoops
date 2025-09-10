import { Route, Routes } from "react-router";
import {
  HomeDashboardPage,
  Error404Page,
  FavoritesPage,
  GameDetailPage,
  TeamDetailPage,
  SearchGamePage,
  SearchTeamPage,
} from "../component/pages";
import { Layout } from "../layout/Layout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* home */}
        <Route path={"/"} element={<HomeDashboardPage />} />

        {/* games */}
        <Route path={"/search-game"} element={<SearchGamePage />} />
        <Route path={"/game"} element={<GameDetailPage />} />

        {/* teams */}
        <Route path={"/search-team"} element={<SearchTeamPage />} />
        <Route path={"/team"} element={<TeamDetailPage />} />

        {/* errors */}
        <Route path={"/404"} element={<Error404Page />} />

        {/* other */}
        <Route path={"/favorites"} element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};
