import type { PlayerData } from "../../types";
import { Image, Text, Title } from "../atoms";
import { StatBox } from "../molecules";

interface MvpCardProps {
  title?: string;
  playerData: PlayerData;
}

export const MvpCard: React.FC<MvpCardProps> = ({ title, playerData }) => {
  const {
    imagePlayer,
    leftStats,
    rightStats,
    namePlayer,
    positionPlayer,
    shirtNumber,
  } = playerData;

  return (
    <section className="flex flex-col gap-4 p-5 rounded-3xl bg-neutral-100">
      <header>
        <Title type="h2">{title ? title : "Este es el titulo"}</Title>
      </header>
      <div className="flex gap-1  w-full justify-between items-center">
        <div className="flex flex-col gap-2">
          {leftStats.map(({ label, value }) => (
            <StatBox title={label} value={value} textPosition="left" />
          ))}
        </div>
        <div className="w-full flex flex-col gap-1 px-2 py-0 items-center justify-between">
          <Title type="h3">{namePlayer}</Title>
          <Image src={imagePlayer.src} alt={imagePlayer.alt} />
          <Text size="m">{positionPlayer}</Text>
          <Text size="s">{shirtNumber}</Text>
        </div>
        <div className="flex flex-col gap-2">
          {rightStats.map(({ label, value }) => (
            <StatBox title={label} value={value} textPosition="right" />
          ))}
        </div>
      </div>
    </section>
  );
};
