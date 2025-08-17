import { useState, useMemo } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Star, Users, BookOpen, Clock } from "lucide-react";
import { useNestedTranslations } from "@/hooks/use-nested-translation";
import enMessages from "../../messages/en.json";
import deMessages from "../../messages/de.json";
import arMessages from "../../messages/ar.json";
import { useParams } from "react-router-dom";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/i18n/constant";

export default function CoursesPage() {
  const t = useNestedTranslations();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const messagesMap = {
    en: enMessages,
    ar: arMessages,
    de: deMessages,
  } as const;

  type Locale = keyof typeof messagesMap;

  const { lang } = useParams<{ lang: Locale }>();
  const locale: Locale = SUPPORTED_LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : DEFAULT_LOCALE;

  const messages = messagesMap[locale];
  const courses = messages.courses.list;

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel =
        selectedLevel === "all" || course.level.toLowerCase() === selectedLevel;
      return matchesSearch && matchesLevel;
    });
  }, [searchTerm, selectedLevel, courses]);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4 font-playfair'>
            {t("courses.pageTitle")}
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            {t("courses.pageSubtitle")}
          </p>
        </div>

        {/* Search and Filter */}
        <div className='flex flex-col md:flex-row gap-4 mb-8'>
          <div className='flex-1'>
            <Input
              type='text'
              placeholder={t("courses.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full'
            />
          </div>
          <div className='flex gap-2'>
            <Button
              variant={selectedLevel === "all" ? "default" : "outline"}
              onClick={() => setSelectedLevel("all")}
            >
              {t("courses.filterAll")}
            </Button>
            <Button
              variant={selectedLevel === "beginner" ? "default" : "outline"}
              onClick={() => setSelectedLevel("beginner")}
            >
              {t("courses.filterBeginner")}
            </Button>
            <Button
              variant={selectedLevel === "intermediate" ? "default" : "outline"}
              onClick={() => setSelectedLevel("intermediate")}
            >
              {t("courses.filterIntermediate")}
            </Button>
            <Button
              variant={selectedLevel === "advanced" ? "default" : "outline"}
              onClick={() => setSelectedLevel("advanced")}
            >
              {t("courses.filterAdvanced")}
            </Button>
          </div>
        </div>

        {/* Courses Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className='overflow-hidden border-slate-200 hover:shadow-lg transition-shadow pt-5'
            >
              <CardHeader>
                <CardTitle className='text-xl font-playfair'>
                  {course.title}
                </CardTitle>
                <p className='text-gray-600 text-sm'>{course.description}</p>
              </CardHeader>

              <CardContent className='space-y-4'>
                {/* Rating and Students */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-1'>
                    {renderStars(course.rating)}
                    <span className='text-sm text-gray-600 ml-1'>
                      ({course.rating})
                    </span>
                  </div>
                  <div className='flex items-center gap-1 text-sm text-gray-600'>
                    <Users className='w-4 h-4' />
                    {course.students.toLocaleString()}{" "}
                    {t("courses.studentsLabel")}
                  </div>
                </div>

                {/* Course Stats */}
                <div className='flex items-center justify-between text-sm text-gray-600'>
                  <div className='flex items-center gap-1'>
                    <BookOpen className='w-4 h-4' />
                    {course.lessons} {t("courses.lessonsLabel")}
                  </div>
                  <div className='flex items-center gap-1'>
                    <Clock className='w-4 h-4' />
                    {course.hours} {t("courses.hoursLabel")}
                  </div>
                </div>

                {/* Instructor */}
                <p className='text-sm text-gray-600'>
                  Instructor:{" "}
                  <span className='font-medium'>{course.instructor}</span>
                </p>

                {/* Price */}
                <div className='flex items-center gap-2'>
                  <span className='text-xl font-bold text-accent'>
                    {course.price}
                  </span>
                  {course.originalPrice && (
                    <span className='text-sm text-gray-400 line-through'>
                      {course.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter>
                <Button className='w-full bg-accent hover:bg-accent/80'>
                  {t("courses.enrollButton")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-600 text-lg'>
              No courses found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
