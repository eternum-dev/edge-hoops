import { NBA_DIVISION, NBA_TEAMS } from "../../constants/nba";
import {
  SearchGameTemplate,
  type SearchGameTemplateProps,
} from "../templates/SearchGameTemplate";

const nbaTeams = NBA_TEAMS.map(({ name, shortName }) => ({
  label: name,
  team: shortName,
}));

const nbaDivisions = NBA_DIVISION.map((item) => ({ label: item }));

export const SearchGamePage = () => {
  const searchGame: SearchGameTemplateProps = {
    gamesTable: {
      changeGraph: () => {},
      gamesButtons: [""],
      tableData: [
        {
          body: [{ children: "no seleccionado" }],
          type: "date",
          header: "local",
        },
        {
          body: [{ children: "no seleccionado" }],
          type: "date",
          header: "visitante",
        },
        {
          body: [{ children: "no seleccionado" }],
          type: "date",
          header: "fecha",
        },
        {
          body: [{ children: "no seleccionado" }],
          type: "date",
          header: "estadio",
        },
      ],
    },
    selectGame: {
      handleSearchGame: () => {},
      homeTeam: {
        optionData: nbaTeams,
        placeholder: "eqipo local",
      },
      season: {
        optionData: nbaDivisions,
      },
      visitorTeam: {
        optionData: nbaTeams,
        placeholder: "equipo visitante",
      },
    },
  };

  return <SearchGameTemplate {...searchGame} />;
};
