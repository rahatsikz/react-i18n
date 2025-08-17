import { useNestedTranslations } from "@/hooks/use-nested-translation";
import { Button } from "./ui/button";
import { Link } from "@/i18n/link";
import { GraduationCap, Menu } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";
import { useLocaleLocation } from "@/i18n/pathname";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";

export function Header() {
  const t = useNestedTranslations(); // this will use the current locale
  const { pathname } = useLocaleLocation();

  const navItems = [
    { to: "/", label: "nav.home" },
    { to: "/courses", label: "nav.courses" },
    { to: "/about", label: "nav.about" },
    { to: "/contact", label: "nav.contact" },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b border-slate-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link to='/' className='flex items-center space-x-2'>
          <GraduationCap className='h-8 w-8 text-accent' />
          <span className='font-playfair font-bold text-xl'>DevCourses</span>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden lg:flex items-center space-x-8'>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium hover:text-accent transition-colors",
                pathname === item.to ? "text-accent" : ""
              )}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className='hidden lg:flex items-center space-x-2 lg:space-x-3'>
          <LanguageSwitcher />
          <Link to='/login'>
            <Button variant='ghost' size='sm' className='px-4'>
              {t("nav.login")}
            </Button>
          </Link>
          <Link to='/signup'>
            <Button
              size='sm'
              className='bg-accent hover:bg-accent/90 text-accent-foreground lg:px-4'
            >
              {t("nav.signup")}
            </Button>
          </Link>
        </div>

        {/* Mobile Drawer */}
        <div className='lg:hidden flex items-center gap-3'>
          <LanguageSwitcher />
          <Link to='/signup'>
            <Button
              size='sm'
              className='w-full bg-accent hover:bg-accent/90 text-accent-foreground'
            >
              {t("nav.signup")}
            </Button>
          </Link>
          <Drawer direction='right'>
            <DrawerTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
              </Button>
            </DrawerTrigger>
            <DrawerContent className='w-full ml-auto  flex flex-col p-6 data-[vaul-drawer-direction=right]:top-[66px] h-fit  data-[vaul-drawer-direction=right]:w-full'>
              <nav className='flex flex-col gap-4'>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "text-sm font-medium hover:text-accent transition-colors",
                      pathname === item.to ? "text-accent" : ""
                    )}
                  >
                    {t(item.label)}
                  </Link>
                ))}
              </nav>
              <div className='mt-6 flex flex-col gap-3'>
                <Link to='/login'>
                  <Button variant='default' size='sm' className='bg-accent'>
                    {t("nav.login")}
                  </Button>
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
