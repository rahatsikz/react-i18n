import { createContext } from "react";
import type { Locale } from "./constant";

export type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  locale: "en", // default
  setLocale: () => {},
});
