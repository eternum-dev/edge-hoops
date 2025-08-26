type CapitalizeFirstLetter = (text: string) => string;

export const capitalizeFirstLetter: CapitalizeFirstLetter = (text) => {
  if (!text) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};
