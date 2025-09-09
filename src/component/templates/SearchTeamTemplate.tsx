import {
  SearchTeam,
  TeamList,
  type SearchTeamProps,
  type TeamListProps,
} from "../organisms";

export interface SearchTeamTemplateProps {
  search: SearchTeamProps;
  eastList: TeamListProps;
  westList: TeamListProps;
}

export const SearchTeamTemplate: React.FC<SearchTeamTemplateProps> = ({
  search,
  eastList,
  westList,
}) => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-full max-h-lvh gap-4 p-5">
      <SearchTeam {...search} className="col-span-12 row-span-3" />
      <TeamList {...eastList} className="col-span-6 row-span-9" />
      <TeamList {...westList} className="col-span-6 row-span-9" />
    </div>
  );
};
