import { Text } from "../atoms";
import { GraphBar } from "../atoms/GraphBar";

type TypeGraphQuarter = "match" | "team";

interface GraphQuarterProps {
  typeGraph?: TypeGraphQuarter;
  titleQuarter: string;
  valueGraph: number | Array<number>;
}

export const GraphQuarter: React.FC<GraphQuarterProps> = ({
  typeGraph = "match",
  titleQuarter = "1 tiempo",
  valueGraph = 10,
}) => {
  return (
    <div className="w-fit h-full flex flex-col px-2 py-1">
      {<Text>{titleQuarter}</Text>}
      {typeGraph === "match" ? (
        <div className="flex gap-1 w-fit h-full">
          <GraphBar height={valueGraph} value={10} color="primary" />
          <GraphBar height={valueGraph} value={10} color="secondary" />
        </div>
      ) : (
        <GraphBar height={valueGraph} value={10} color="secondary" />
      )}
    </div>
  );
};
