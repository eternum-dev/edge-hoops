import type { ShortTeamNames } from "../../types";
import { TeamLogo, Text, Title } from "../atoms";

export interface headerTeamData {
  teamName: string;
  shortTeamName: ShortTeamNames;
  stadium: string;
  conference: string;
  division: string;
}

type HeaderTeamProps = { headerTeamData: headerTeamData };

export const HeaderTeam: React.FC<HeaderTeamProps> = ({ headerTeamData }) => {
  const { conference, division, shortTeamName, stadium, teamName } =
    headerTeamData;
  return (
    <section className="flex justify-between gap-4 bg-neutral-100 rounded-3xl shadow-md shadow-neutral-700 p-5">
      <div className="w-full flex flex-col justify-between gap-1.5 ">
        <header className="flex justify-between gap-1 items-center">
          <Title className="w-full text-center" type="h2">
            {teamName}
          </Title>
          <Text size="l">{shortTeamName}</Text>
        </header>
        <div className="flex justify-between items-center gap-1">
          <div className="relative">
            <Text className="!text-neutral-700" size="s">
              Estadio
            </Text>
            <Text size="m" className="relative left-1">
              {stadium}
            </Text>
          </div>
          <div className="relative">
            <Text className="!text-neutral-700" size="s">
              Conferencia
            </Text>
            <Text size="m" className="relative left-1">
              {conference}
            </Text>
          </div>
          <footer className="relative">
            <Text className="!text-neutral-700" size="s">
              Divisíon
            </Text>
            <Text size="m" className="relative left-1">
              {division}
            </Text>
          </footer>
        </div>
      </div>
      <TeamLogo size="full" team={shortTeamName} />
    </section>
  );
};
