export const formatUrlString = (title: string) => {
  let str = "";
  if (title === undefined) return str;
  str = title.toLowerCase();

  // Replace comma with hyphen
  str = str.replace(/,/g, "-");
  
  // Insert hyphen after any numeric character
  str = str.replace(/(\d)([a-z])/g, "$1-$2");
  
  // Remove any character that is not alphanumeric, space or hyphen
  str = str.replace(/[^a-z0-9\s-]/g, "");
  
  // End string after "market"
  var marketIndex = str.indexOf("market");
  if (marketIndex !== -1) {
    str = str.substring(0, marketIndex + "market".length);
  }
  
  // Replace any whitespace with hyphen
  str = str.replace(/\s+/g, "-");

  return str;
};
