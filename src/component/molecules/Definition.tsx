import { Strong, Text } from "../atoms";

interface DefinitionProps {
  abbreviation: string;
  fullWord: string;
}

export const Definition: React.FC<DefinitionProps> = ({ abbreviation, fullWord }) => {
  return (
    <div className="bg-neutral-100 p-1 flex gap-1 items-end">
      <Strong size="s">{abbreviation}</Strong>
      <Text size="s">{fullWord}</Text>
    </div>
  );
};
