import { useLocation } from "react-router-dom";
import { useLocale } from "../hooks/use-locale";

export function useLocaleLocation() {
  const { locale } = useLocale();
  const location = useLocation();

  // Remove the current locale prefix if it exists
  const regex = new RegExp(`^/${locale}(?=/|$)`);
  const rawPathname = location.pathname.replace(regex, "") || "/";

  return {
    ...location,
    pathname: rawPathname,
  };
}
