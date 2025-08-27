import { Text } from "../atoms";
import { GraphBar } from "../atoms/GraphBar";

interface TeamQuarterProps {
  typeGraph: "team";
  titleQuarter: string;
  valueGraph: [number | string];
}

interface MatchQuarterProps {
  typeGraph: "match";
  titleQuarter: string;
  valueGraph: [number | string, number | string];
}

type GraphQuarterProps = TeamQuarterProps | MatchQuarterProps;

export const GraphQuarter: React.FC<GraphQuarterProps> = ({
  typeGraph,
  titleQuarter = "1 tiempo",
  valueGraph,
}) => {
  return (
    <div className="w-full h-full max-w-[200px] flex flex-col px-2 py-1">
      {
        <Text size="s" className="text-center mb-1">
          {titleQuarter}
        </Text>
      }
      {typeGraph === "match" ? (
        <div className="flex gap-1 w-full h-full ">
          <GraphBar
            height={valueGraph[0]}
            value={valueGraph[0]}
            color="primary"
            className="items-end"
          />
          <GraphBar
            height={valueGraph[1]}
            value={valueGraph[1]}
            color="secondary"
            className="items-start"
          />
        </div>
      ) : (
        <GraphBar
          height={valueGraph[0]}
          value={valueGraph[0]}
          color="secondary"
        />
      )}
    </div>
  );
};
