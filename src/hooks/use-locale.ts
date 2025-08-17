import { LanguageContext } from "@/i18n/language-context";
import { useContext } from "react";

export const useLocale = () => useContext(LanguageContext);
