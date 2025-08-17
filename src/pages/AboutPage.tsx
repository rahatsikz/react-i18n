import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Users, BookOpen, Award } from "lucide-react";
import { useNestedTranslations } from "@/hooks/use-nested-translation";

export default function AboutPage() {
  const t = useNestedTranslations();

  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6'>
            {t("about.title")}
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            {t("about.subtitle")}
          </p>
        </div>

        {/* Mission Section */}
        <div className='mb-16'>
          <Card className='max-w-4xl mx-auto'>
            <CardHeader className='text-center'>
              <CardTitle className='font-playfair text-3xl'>
                {t("about.mission.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='text-lg text-center'>
                {t("about.mission.description")}
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card className='text-center'>
            <CardHeader>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='h-8 w-8 text-accent-foreground' />
              </div>
              <CardTitle className='text-3xl font-bold text-accent'>
                {t("about.stats.students")}
              </CardTitle>
              <CardDescription className='text-lg'>
                {t("about.stats.studentsLabel")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className='text-center'>
            <CardHeader>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <BookOpen className='h-8 w-8 text-accent-foreground' />
              </div>
              <CardTitle className='text-3xl font-bold text-accent'>
                {t("about.stats.courses")}
              </CardTitle>
              <CardDescription className='text-lg'>
                {t("about.stats.coursesLabel")}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className='text-center'>
            <CardHeader>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4'>
                <Award className='h-8 w-8 text-accent-foreground' />
              </div>
              <CardTitle className='text-3xl font-bold text-accent'>
                {t("about.stats.completion")}
              </CardTitle>
              <CardDescription className='text-lg'>
                {t("about.stats.completionLabel")}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
