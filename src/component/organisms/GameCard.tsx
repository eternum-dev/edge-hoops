import React from "react";
import type { MoleculesSize, WidthSize } from "../../types";
import type { GameData } from "../../types/games";
import { Divider } from "../atoms";
import { MatchMeta, TeamScore } from "../molecules";

export interface GameCardSizeFitProps {
  size: "fit";
  handleIsSelected: (currentIndex: string | number) => void;
  isSelectedCard: number | string;
  game: GameData;
  id: number | string;
  className?: string;
}

export interface GameCardSizeMaxProps {
  size: "max";
  handleIsSelected?: () => void;
  isSelectedCard?: number | string;
  game: GameData;
  id?: number | string;
  className?: string;
}

export type GameCardProps = GameCardSizeFitProps | GameCardSizeMaxProps;

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
  ({
    size,
    handleIsSelected = () => {},
    isSelectedCard = false,
    game,
    id,
    className,
  }) => {
    const selectedColor = isSelectedCard === id ? "white" : "black";
    const selectedCard = () => {
      if (size === "max") return;
      handleIsSelected(id);
    };

    return (
      <section
        className={`bg-neutral-100 flex flex-col gap-3 border border-neutral-300 ${
          sizeStylesContainer[size].container
        } ${isSelectedCard === id && "bg-secondary-300 border border-secondary-300"} ${className}`}
        onClick={selectedCard}
      >
        <div className="flex gap-1.5 items-center h-full">
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
