import { NBA_DIVISION, NBA_STRUCTURE } from "../../constants/nba";
import { SearchTeamTemplate, type SearchTeamTemplateProps } from "../templates";

export const SearchTeamPage = () => {
  const searchTeamData: SearchTeamTemplateProps = {
    eastList: { teamStructure: NBA_STRUCTURE[0] },
    search: {
      onClick: () => {},
      optionsData: NBA_DIVISION.map((div) => ({ label: div })),
    },
    westList: { teamStructure: NBA_STRUCTURE[1] },
  };

  return <SearchTeamTemplate {...searchTeamData} />;
};
