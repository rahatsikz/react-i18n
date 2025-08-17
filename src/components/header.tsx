import { useNestedTranslations } from "@/hooks/use-nested-translation";
import { Button } from "./ui/button";
import { Link } from "@/link";
import { GraduationCap } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const t = useNestedTranslations(); // this will use the current locale

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link to='/' className='flex items-center space-x-2'>
          <GraduationCap className='h-8 w-8 text-accent' />
          <span className='font-playfair font-bold text-xl'>DevCourses</span>
        </Link>

        <nav className='hidden lg:flex items-center space-x-8'>
          <Link
            to='/'
            className='text-sm font-medium hover:text-accent transition-colors'
          >
            {t("nav.home")}
          </Link>
          <Link
            to='/courses'
            className='text-sm font-medium hover:text-accent transition-colors'
          >
            {t("nav.courses")}
          </Link>
          <Link
            to='/about'
            className='text-sm font-medium hover:text-accent transition-colors'
          >
            {t("nav.about")}
          </Link>
          <Link
            to='/contact'
            className='text-sm font-medium hover:text-accent transition-colors'
          >
            {t("nav.contact")}
          </Link>
        </nav>

        <div className='flex items-center space-x-2 lg:space-x-3'>
          <LanguageSwitcher />
          <Link to='/login'>
            <Button variant='ghost' size='sm' className='hidden md:flex'>
              {t("nav.login")}
            </Button>
          </Link>
          <Link to='/signup'>
            <Button
              size='sm'
              className='bg-accent  hover:bg-accent/90 text-accent-foreground lg:px-4'
            >
              {t("nav.signup")}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
