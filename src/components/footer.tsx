import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { GraduationCap } from "lucide-react";
import { Link } from "@/i18n/link";
import { useNestedTranslations } from "@/hooks/use-nested-translation";

export function Footer() {
  const t = useNestedTranslations(); // dynamic translations based on locale

  return (
    <footer className='bg-muted py-12 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 sm:max-lg:gap-0'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <GraduationCap className='h-8 w-8 text-accent' />
              <span className='font-playfair font-bold text-xl'>
                DevCourses
              </span>
            </div>
            <p className='text-sm text-muted-foreground max-w-xs'>
              {t("footer.description")}
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-4 lg:gap-8 sm:max-lg:gap-0'>
            {/* Quick Links */}
            <div>
              <h3 className='font-semibold mb-4'>{t("footer.quickLinks")}</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    to='/'
                    className='text-muted-foreground hover:text-accent transition-colors'
                  >
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='text-muted-foreground hover:text-accent transition-colors'
                  >
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='text-muted-foreground hover:text-accent transition-colors'
                  >
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className='font-semibold mb-4'>{t("footer.courses")}</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    to='/courses/react'
                    className='text-muted-foreground hover:text-accent transition-colors'
                  >
                    {t("courses.react.title")}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/courses/nextjs'
                    className='text-muted-foreground hover:text-accent transition-colors'
                  >
                    {t("courses.nextjs.title")}
                  </Link>
                </li>
                <li>
                  <Link
                    to='/courses/vue'
                    className='text-muted-foreground hover:text-accent transition-colors'
                  >
                    {t("courses.vue.title")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='font-semibold mb-3'>{t("footer.newsletter")}</h3>

            <div className='flex items-center space-x-3'>
              <Input
                placeholder={t("footer.emailPlaceholder")}
                className='flex-1 border-input border-2 shadow-xs'
              />
              <Button
                size='sm'
                className='bg-accent hover:bg-accent/90 text-accent-foreground px-4'
              >
                {t("footer.subscribe")}
              </Button>
            </div>
          </div>
        </div>

        <div className='border-t mt-8 pt-8 text-center text-sm text-muted-foreground'>
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
