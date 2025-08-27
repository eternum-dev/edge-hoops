import type { GameData } from "../../types";
import { Title } from "../atoms";
import { GameCard } from "./GameCard";

interface GameListProps {
  title?: string;
  gameListData: GameData[];
  handleIsSelected: (currentIndex: string | number) => void;
  isSelectedGame: string | number;
}

export const GameList: React.FC<GameListProps> = ({
  title = "Ultimos 10 juegos",
  gameListData,
  handleIsSelected,
  isSelectedGame,
}) => {
  return (
    <section className=" flex flex-col gap-4 bg-neutral-100 p-5 rounded-3xl shadow-neutral-700 shadow-md">
      <Title>{title}</Title>
      <div className="flex flex-col gap-3">
        {gameListData.map((game, index) => (
          <GameCard
            game={game}
            size="fit"
            id={String(index)}
            handleIsSelected={handleIsSelected}
            isSelectedCard={isSelectedGame}
          />
        ))}
      </div>
    </section>
  );
};
