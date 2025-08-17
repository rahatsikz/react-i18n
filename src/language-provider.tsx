import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { LanguageContext } from "./language-context";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "./constant";
import i18n from "./i18n";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const locale: Locale = SUPPORTED_LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : DEFAULT_LOCALE;

  // **Important: set i18next language when path changes**
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  // Redirect if unsupported
  if (!SUPPORTED_LOCALES.includes(lang as Locale)) {
    navigate(`/${DEFAULT_LOCALE}`, { replace: true });
    return null;
  }

  const setLocale = (newLocale: Locale) => {
    const segments = location.pathname.split("/").slice(2);
    navigate(`/${newLocale}/${segments.join("/")}`);
    i18n.changeLanguage(newLocale); // also update i18next
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};
