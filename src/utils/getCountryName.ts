import { countries } from "./countries";

export const getCountryName = (code: string) => {
  return countries.find((country) => country.id === code)?.name || "";
};
