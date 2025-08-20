import type { DefinitionProps } from "../../types";
import { Strong, Text } from "../atoms";

export const Definition: React.FC<DefinitionProps> = ({ abbreviation, fullWord }) => {
  return (
    <div className="bg-neutral-100 p-1 flex gap-1 items-end">
      <Strong size="s">{abbreviation}</Strong>
      <Text size="s">{fullWord}</Text>
    </div>
  );
};
