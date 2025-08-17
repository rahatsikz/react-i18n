import en from "../../messages/en.json";
import de from "../../messages/de.json";
import ar from "../../messages/ar.json";

export const resources = {
  en: { translation: en },
  de: { translation: de },
  ar: { translation: ar },
} as const;

export type Resources = typeof resources;
