export const formatTitle = (input: string): string => {
  const maxLength = 65;
  const trimLength = 60;

  if (input.length <= maxLength) {
    return input;
  }
  return `${input.substring(0, trimLength)}...`;
};
