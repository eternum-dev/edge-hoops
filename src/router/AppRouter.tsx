import { Route, Routes } from "react-router";
import {
  HomeDashboardPage,
  Error404Page,
  FavoritesPage,
  GameDetailPage,
  TeamPage,
} from "../component/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomeDashboardPage />} />
      <Route path={"/game"} element={<GameDetailPage />} />
      <Route path={"/team"} element={<TeamPage />} />
      <Route path={"/404"} element={<Error404Page />} />
      <Route path={"/favorites"} element={<FavoritesPage />} />
    </Routes>
  );
};
