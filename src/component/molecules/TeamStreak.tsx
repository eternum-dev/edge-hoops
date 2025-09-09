import { Icon, Strong } from "../atoms";

export interface TeamStreakProps {
  value: number;
  maxStreak?: number;
  className?: string;
}

export const TeamStreak: React.FC<TeamStreakProps> = ({
  value = 0,
  maxStreak = 5,
  className = "",
}) => {
  return (
    <div
      className={`flex p-5  justify-center items-center aspect-square rounded-[30px] w-full h-full gap-2.5 bg-neutral-100 drop-shadow-md ${className} shadow-md shadow-neutral-700`}
    >
      <Strong color="black" size="m">{`${value}/${maxStreak}`}</Strong>
      <Icon icon="Fire"size="full" />
    </div>
  );
};
