export const formatDescr = (input: string): string => {
  const maxLength = 170;
  const trimLength = 160;

  if (input.length <= maxLength) {
    return input;
  }
  return `${input.substring(0, trimLength)}...`;
};
