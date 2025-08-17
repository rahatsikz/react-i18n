import { useTranslation } from "react-i18next";
import en from "../../messages/en.json";

type Messages = typeof en;

// Recursive approach with better performance and reliability
type Paths<T, D extends string = ""> = T extends string | number | boolean
  ? D
  : T extends readonly (infer U)[]
  ? D | `${D}.${number}` | Paths<U, `${D}.${number}`>
  : T extends object
  ? D extends ""
    ? {
        [K in keyof T & string]: Paths<T[K], K> | K;
      }[keyof T & string]
    :
        | D
        | {
            [K in keyof T & string]: Paths<T[K], `${D}.${K}`>;
          }[keyof T & string]
  : never;

// Most reliable approach - handles deep nesting with good performance
type DeepKeys<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? T[K] extends readonly unknown[]
          ? K | `${K}.${number}`
          : K | `${K}.${DeepKeys<T[K]>}`
        : K;
    }[keyof T & string]
  : never;

// Smart overloaded function type with multiple fallbacks
interface TranslationFunction {
  // Try the most comprehensive type first
  <P extends DeepKeys<Messages>>(key: P): string;
  // Fallback to Paths approach
  <P extends Paths<Messages>>(key: P): string;
  // Final fallback for any string
  (key: string): string;
}

export function useNestedTranslations(): TranslationFunction {
  const { t } = useTranslation();

  return function (key: string): string {
    return t(key);
  } as TranslationFunction;
}
