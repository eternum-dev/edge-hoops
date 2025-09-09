import { Title } from "../atoms";
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
    <div className="w-full h-full max-w-[200px] flex flex-col justify-between">
      {
        <Title type="h5" className="text-center">
          {titleQuarter}
        </Title>
      }
      {typeGraph === "match" ? (
        <div className="flex gap-1 w-full h-full max-h-[200px] ">
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
        <div className="flex gap-1 w-full h-full max-h-[200px] ">
          <GraphBar
            height={valueGraph[0]}
            value={valueGraph[0]}
            color="primary"
          />
        </div>
      )}
    </div>
  );
};
