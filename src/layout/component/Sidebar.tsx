import { LinkTo, Title } from "../../component/atoms";
import { linksPages } from "../../constants";

interface SidebarProps {
  path: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ path }) => {
  return (
    <aside className="w-60 bg-secondary-300 text-white flex flex-col p-4">
      <Title type="h4" color="white" className="mb-8">
        Edge Hoops
      </Title>
      <nav className="flex flex-col gap-5">
        {linksPages.map((link) => (
          <LinkTo {...link} path={path} />
        ))}
      </nav>
    </aside>
  );
};
