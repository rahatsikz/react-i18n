import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { Locale } from "./constant";

const SUPPORTED_LOCALES = ["en", "de", "ar"] as const;
const DEFAULT_LOCALE = "en";

// Map country codes to locales
const COUNTRY_LOCALE_MAP: Record<string, string> = {
  DE: "de",
  EG: "ar",
  SA: "ar",
  US: "en",
  GB: "en",
};

export function GeoRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    if (SUPPORTED_LOCALES.includes(pathSegments[1] as Locale)) return;

    const redirect = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const locale = COUNTRY_LOCALE_MAP[data.country_code] || DEFAULT_LOCALE;

        if (!location.pathname.startsWith(`/${locale}`)) {
          navigate(`/${locale}${location.pathname}`, { replace: true });
        }
      } catch {
        // fallback if API fails
        navigate(`/${DEFAULT_LOCALE}${location.pathname}`, { replace: true });
      }
    };

    redirect();
  }, [location.pathname, navigate]);

  return null;
}
