import type { NBAConference } from "../../constants/nba";
import type { TextPosition } from "../../types";
import { Option, Title } from "../atoms";
import { Span } from "../atoms/Span";

interface TeamListProps {
  teamStructure: NBAConference;
  nameTeamPosition?: TextPosition;
  className?: string;
}
const positionStyles: Record<TextPosition, string> = {
  left: "items-start",
  right: "items-end",
};
export const TeamList: React.FC<TeamListProps> = ({
  teamStructure,
  nameTeamPosition = "left",
  className,
}) => {
  const { conference, divisions } = teamStructure;

  return (
    <section
      className={`w-full flex flex-col  gap-2 bg-neutral-100 p-5 rounded-3xl  shadow-neutral-900 shadow-md $ ${className}`}
    >
      <header>
        <Title>
          Conferencia
          <Span size="l" color="primary">
            {conference}
          </Span>
        </Title>
      </header>

      {divisions.map(({ division, teams }) => (
        <div className="flex flex-col gap-2 mx-2">
          <Title type="h3">
            Division
            <Span size="m" color="secondary">
              {division}
            </Span>
          </Title>
          <div
            className={`mx-1 w-full flex flex-col gap-0.5 ${positionStyles[nameTeamPosition]}`}
          >
            {teams.map(({ name, shortName }) => (
              <Option
                icon={shortName}
                textPosition={nameTeamPosition}
                key={name}
              >
                {name}
              </Option>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
