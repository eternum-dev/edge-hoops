import type { PlayerData } from "../../types";
import { Image, Span, Text, Title } from "../atoms";
import { StatBox } from "../molecules";

export interface MvpCardProps {
  title?: string;
  playerData: PlayerData;
  className?: string;
}

export const MvpCard: React.FC<MvpCardProps> = ({
  title,
  playerData,
  className = "",
}) => {
  const {
    imagePlayer,
    leftStats,
    rightStats,
    namePlayer,
    positionPlayer,
    shirtNumber,
  } = playerData;

  return (
    <section
      className={`w-full flex flex-col gap-4 p-5 rounded-3xl bg-neutral-100 shadow-neutral-700 shadow-md ${className}`}
    >
      <header>
        <Title type="h2">{title ? title : "Este es el titulo"}</Title>
      </header>
      <div className="flex gap-1 h-full w-full justify-between items-center">
        <div className="flex flex-col gap-2 justify-around h-full">
          {leftStats.map(({ label, value }) => (
            <StatBox
              title={label}
              value={value}
              color="blue"
              textPosition="left"
            />
          ))}
        </div>
        <div className="w-full flex h-full flex-col gap-1 px-2 py-0 items-center justify-between">
          <Title type="h4">{namePlayer}</Title>
          <Image src={imagePlayer.src} alt={imagePlayer.alt} className="" />
          <Text size="l">
            posicion <Span size="s">{positionPlayer}</Span>
          </Text>
          <Text size="l">
            Dorsal
            <Span size="s"> {shirtNumber}</Span>
          </Text>
        </div>
        <div className="flex flex-col gap-2 justify-around h-full">
          {rightStats.map(({ label, value }) => (
            <StatBox
              title={label}
              value={value}
              color="blue"
              textPosition="right"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
