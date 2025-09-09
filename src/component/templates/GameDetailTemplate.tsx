import {
  GameCard,
  GraphCard,
  HeadToHeadTable,
  MvpCard,
  PlayersStadisticTable,
  type GameCardProps,
  type GraphCardProps,
  type HeadToHeadTableProps,
  type MvpCardProps,
  type PlayersStadisticTableProps,
} from "../organisms";

export interface GameDetailTemplateProps {
  match: GameCardProps;
  mvpA: MvpCardProps;
  mvpB: MvpCardProps;
  graph: GraphCardProps;
  headTohead: HeadToHeadTableProps;
  player: PlayersStadisticTableProps;
}

export const GameDetailTemplate: React.FC<GameDetailTemplateProps> = ({
  match,
  mvpA,
  mvpB,
  graph,
  headTohead,
  player,
}) => {
  return (
    <div className="grid grid-cols-12  h-full max-h-lvh gap-4 p-5">
      <GameCard className="col-span-12" {...match} />
      <MvpCard {...mvpA} className="col-span-4" />
      <GraphCard {...graph} className="col-span-4" />
      <MvpCard {...mvpB} className="col-span-4" />
      <HeadToHeadTable {...headTohead} className="col-span-6 " />
      <PlayersStadisticTable {...player} className="col-span-6 " />
    </div>
  );
};
