import type { DefinitionProps } from "../../types";
import { Text } from "../atoms";

export const Definition: React.FC<DefinitionProps> = ({
  abbreviation,
  fullWord,
}) => {
  return (
    <div className="bg-neutral-100 flex flex-col">
      <Text className="!text-neutral-700" size="m">
        {abbreviation}
      </Text>
      <Text className="relative left-1" size="m">{fullWord}</Text>
    </div>
  );
};
