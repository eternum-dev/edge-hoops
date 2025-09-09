import { Outlet, useLocation } from "react-router";
import { Sidebar } from "./component/Sidebar";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex w-screen h-screen">
      <Sidebar path={pathname} />

      <main className="flex-1 bg-secondary-100  overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
