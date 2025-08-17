import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { BookOpen, Users, Award, Play, Clock } from "lucide-react";
import { Link } from "@/i18n/link";
import { useNestedTranslations } from "@/hooks/use-nested-translation";

export default function HomePage() {
  const t = useNestedTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto text-center'>
          <h1 className='font-playfair font-bold text-4xl md:text-6xl text-foreground max-w-2xl mx-auto mb-6'>
            {t("hero.title")}
          </h1>
          <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty'>
            {t("hero.subtitle")}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link to='/courses'>
              <Button
                size='lg'
                className='bg-accent hover:bg-accent/90 text-accent-foreground'
              >
                {t("hero.cta")}
              </Button>
            </Link>
            <Button
              size='lg'
              variant='outline'
              className='border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent'
            >
              <Play className='mr-2 h-4 w-4' />
              {t("hero.watchDemo")}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-muted'>
        <div className='container mx-auto'>
          <h2 className='font-playfair font-bold text-3xl text-center text-foreground mb-12'>
            {t("features.title")}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='text-center'>
              <CardHeader>
                <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <BookOpen className='h-6 w-6 text-accent-foreground' />
                </div>
                <CardTitle>{t("features.practical.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t("features.practical")}</CardDescription>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardHeader>
                <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Award className='h-6 w-6 text-accent-foreground' />
                </div>
                <CardTitle>{t("features.expert.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t("features.expert.description")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardHeader>
                <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <Users className='h-6 w-6 text-accent-foreground' />
                </div>
                <CardTitle>{t("features.community.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {t("features.community.description")}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto'>
          <h2 className='font-playfair font-bold text-3xl text-center text-foreground mb-12'>
            {t("courses.title")}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {["react", "nextjs", "vue"].map((course) => (
              <Card
                key={course}
                className='hover:shadow-lg transition-shadow justify-between'
              >
                <CardHeader>
                  <div className='flex md:max-lg:flex-col justify-between md:max-lg:items-start gap-2 items-center mb-2'>
                    <Badge variant='secondary'>
                      {t(`courses.${course}.level`)}
                    </Badge>
                    <span className='font-bold text-2xl text-accent'>
                      {t(`courses.${course}.price`)}
                    </span>
                  </div>
                  <CardTitle>{t(`courses.${course}.title`)}</CardTitle>
                  <CardDescription className='text-pretty'>
                    {t(`courses.${course}.description`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex items-center text-sm text-muted-foreground mb-4'>
                    <Clock className='h-4 w-4 mr-2' />
                    {t(`courses.${course}.duration`)}
                  </div>
                  <Button className='w-full bg-accent hover:bg-accent/90 text-accent-foreground'>
                    {t("courses.cta")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
