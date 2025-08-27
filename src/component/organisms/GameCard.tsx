import React from "react";
import type { MoleculesSize, WidthSize } from "../../types";
import type { GameData } from "../../types/games";
import { Divider } from "../atoms";
import { MatchMeta, TeamScore } from "../molecules";

interface GameCardProps {
  size: WidthSize;
  handleIsSelected: (currentIndex: string | number) => void;
  isSelectedCard?: number | string;
  game: GameData;
  id: number | string;
}

type GameCardItems = {
  container: string;
  matchMeta: MoleculesSize;
  teamScore: MoleculesSize;
};

const sizeStylesContainer: Record<WidthSize, GameCardItems> = {
  fit: {
    container: "rounded-[12px] p-3 gap-0.5",
    matchMeta: "small",
    teamScore: "small",
  },
  max: {
    container: "rounded-[30px] p-5 gap-1.5",
    matchMeta: "full",
    teamScore: "full",
  },
};

export const GameCard: React.FC<GameCardProps> = React.memo(
  ({ size, handleIsSelected, isSelectedCard, game, id }) => {
    const selectedColor = isSelectedCard === id ? "white" : "black";
    const selectedCard = () => {
      if (size === "max") return;
      handleIsSelected(id);
    };

    return (
      <section
        className={`bg-neutral-100 flex flex-col gap-2 shadow-sm shadow-neutral-800 ${
          sizeStylesContainer[size].container
        } ${isSelectedCard === id && "bg-secondary-300"}`}
        onClick={selectedCard}
      >
        <div className="flex gap-0.5 items-center">
          <TeamScore
            team={game.homeTeam.code}
            teamName={game.homeTeam.name}
            score={game.homeTeam.score}
            size={sizeStylesContainer[size].teamScore}
            colorText={selectedColor}
          />
          <Divider color={selectedColor} />
          <TeamScore
            team={game.awayTeam.code}
            teamName={game.awayTeam.name}
            score={game.awayTeam.score}
            positionLogo="right"
            size={sizeStylesContainer[size].teamScore}
            colorText={selectedColor}
          />
        </div>
        <MatchMeta
          size={sizeStylesContainer[size].matchMeta}
          textColor={selectedColor}
          winnerTeamCode={game.winnerTeamCode}
          stadium={game.stadium}
          date={game.date}
        />
      </section>
    );
  }
);
