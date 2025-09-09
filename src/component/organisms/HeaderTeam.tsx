import type { ShortTeamNames } from "../../types";
import { TeamLogo, Text, Title } from "../atoms";

export interface HeaderTeamProps {
  teamName: string;
  shortTeamName: ShortTeamNames;
  stadium: string;
  conference: string;
  division: string;
  className?: string;
}

export const HeaderTeam: React.FC<HeaderTeamProps> = (props) => {
  const {
    conference,
    division,
    shortTeamName,
    stadium,
    teamName,
    className = "",
  } = props;
  return (
    <section
      className={`flex justify-between gap-4 bg-neutral-100 rounded-3xl shadow-md shadow-neutral-700 p-5 ${className}`}
    >
      <div className="w-full flex flex-col justify-between gap-1.5 ">
        <header className="flex justify-between gap-1 items-center">
          <Title className="w-full text-center" type="h2">
            {teamName}
          </Title>
          <Text size="l">{shortTeamName}</Text>
        </header>
        <div className="flex justify-between items-center gap-1">
          <div className="relative">
            <Text className="!text-neutral-700" size="m">
              Estadio
            </Text>
            <Text size="l" className="relative left-1">
              {stadium}
            </Text>
          </div>
          <div className="relative">
            <Text className="!text-neutral-700" size="m">
              Conferencia
            </Text>
            <Text size="l" className="relative left-1">
              {conference}
            </Text>
          </div>
          <footer className="relative">
            <Text className="!text-neutral-700" size="m">
              Divisíon
            </Text>
            <Text size="l" className="relative left-1">
              {division}
            </Text>
          </footer>
        </div>
      </div>
      <TeamLogo size="full" team={shortTeamName} className="!w-fit" />
    </section>
  );
};
