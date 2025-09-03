import React from "react";
import type { MatchGraphData, TeamGraphData } from "../../types";
import { Button, DashedLine, ScuareColor, Title } from "../atoms";
import { GraphQuarter, MatchUpTeam } from "../molecules";

export type GraphCardProps = MatchGraphData | TeamGraphData;

export const GraphCard: React.FC<GraphCardProps> = (props) => {
  const { buttons, graphs, typeGraph, title, className = "" } = props;

  const isTitle =
    title ??
    (typeGraph === "match" ? "grafico del partido" : "grafico de equipo");

  return (
    <section
      className={`w-full flex flex-col gap-4 bg-neutral-100 rounded-3xl p-5 shadow-neutral-700 shadow-md ${className}`}
    >
      <header>
        <Title>{isTitle}</Title>
      </header>
      <div className="h-full flex flex-col justify-center gap-2.5">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-full justify-around  items-stretch">
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
              <Button
                color="secondary"
                onClick={() => console.log("object")}
                type="button"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
        {typeGraph === "match" && (
          <footer className="flex justify-center items-center gap-2">
            <ScuareColor colorBox="primary" />
            <MatchUpTeam
              leftTeam={props.leftTeam}
              rightTeam={props.rightTeam}
            />
            <ScuareColor colorBox="secondary" />
          </footer>
        )}
      </div>
    </section>
  );
};
