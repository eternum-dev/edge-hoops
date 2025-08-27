import React from "react";
import type { MatchGraphData, TeamGraphData } from "../../types";
import { Button, DashedLine, ScuareColor, Title } from "../atoms";
import { GraphQuarter, MatchUpTeam } from "../molecules";

type GraphCardProps = MatchGraphData | TeamGraphData;

export const GraphCard: React.FC<GraphCardProps> = (props) => {
  const { buttons, graphs, typeGraph, title } = props;

  const isTitle =
    title ??
    (typeGraph === "match" ? "grafico del partido" : "grafico de equipo");

  return (
    <section className="bg-neutral-100 rounded-3xl p-5 shadow-xl shadow-neutral-1000">
      <header>
        <Title>{isTitle}</Title>
      </header>
      <div>
        <div className="flex h-[150px] justify-around">
          {typeGraph === "match"
            ? graphs.map(({ titleGraph, value }, index) => (
                <React.Fragment key={titleGraph}>
                  <div></div>
                  <GraphQuarter
                    titleQuarter={titleGraph}
                    valueGraph={value}
                    typeGraph={typeGraph}
                  />
                  {index !== 3 ? <DashedLine /> : <div></div>}
                </React.Fragment>
              ))
            : graphs.map(({ titleGraph, value }, index) => (
                <React.Fragment key={titleGraph}>
                  <div></div>
                  <GraphQuarter
                    titleQuarter={titleGraph}
                    valueGraph={value}
                    typeGraph={typeGraph}
                  />
                  {index !== 3 ? <DashedLine /> : <div></div>}
                </React.Fragment>
              ))}
        </div>
        <div className="flex justify-between">
          {buttons.map(({ label }) => (
            <Button color="secondary" onClick={() => console.log("object")} type="button">
              {label}
            </Button>
          ))}
        </div>
      </div>
      {typeGraph === "match" && (
        <footer className="flex justify-center items-center gap-2 mt-2.5">
          <ScuareColor colorBox="primary" />
          <MatchUpTeam leftTeam={props.leftTeam} rightTeam={props.rightTeam} />
          <ScuareColor colorBox="secondary" />
        </footer>
      )}
    </section>
  );
};
