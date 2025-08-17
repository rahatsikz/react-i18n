import React from "react";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n/constant";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FlagIcon, type FlagIconCode } from "react-flag-kit";
import { Check } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useLocale();

  const flags: Record<Locale, string> = {
    en: "GB",
    ar: "SA",
    de: "DE",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className='flex items-center gap-2 rounded border border-gray-300 px-3 py-2 
             hover:bg-gray-100 transition focus:outline-none focus:ring-0 focus:border-gray-300 '
      >
        <FlagIcon code={flags[locale] as FlagIconCode} size={24} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-32 p-1.5'>
        {SUPPORTED_LOCALES.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => setLocale(loc)}
            className='flex items-center justify-between gap-2 px-3 py-2 group  rounded transition'
          >
            <div className='flex items-center gap-2'>
              <FlagIcon code={flags[loc] as FlagIconCode} size={20} />
              <span className='capitalize'>{loc}</span>
            </div>
            {locale === loc && (
              <Check className='w-4 h-4 text-accent group-hover:text-white' />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
