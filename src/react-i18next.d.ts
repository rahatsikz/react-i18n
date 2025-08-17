import "react-i18next";
import { Resources } from "./resources";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: Resources["en"]; // typing based on your default language
  }
}
