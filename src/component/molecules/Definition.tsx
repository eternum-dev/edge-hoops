import type { DefinitionProps } from "../../types";
import { Text } from "../atoms";

export const Definition: React.FC<DefinitionProps> = ({
  abbreviation,
  fullWord,
}) => {
  return (
    <div className="bg-neutral-100 flex ">
      <Text className="!text-neutral-700" size="l">
        {abbreviation}
      </Text>
      <Text className="relative left-1 mt-auto" size="m">{fullWord}</Text>
    </div>
  );
};
