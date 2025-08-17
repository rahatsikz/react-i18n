import { useNestedTranslations } from "@/hooks/use-nested-translation";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link } from "@/i18n/link";

export default function LoginPage() {
  const t = useNestedTranslations();

  return (
    <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <CardTitle className='font-playfair text-2xl'>
            {t("auth.login.title")}
          </CardTitle>
          <CardDescription>{t("auth.login.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>{t("auth.login.email")}</Label>
            <Input
              id='email'
              type='email'
              placeholder={t("auth.login.email")}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>{t("auth.login.password")}</Label>
            <Input id='password' type='password' />
          </div>
          <div className='text-right'>
            <Link
              to='/forgot-password'
              className='text-sm text-accent hover:underline'
            >
              {t("auth.login.forgotPassword")}
            </Link>
          </div>
          <Button className='w-full bg-accent hover:bg-accent/90 text-accent-foreground'>
            {t("auth.login.loginButton")}
          </Button>
          <div className='text-center text-sm'>
            <span className='text-muted-foreground'>
              {t("auth.login.noAccount")}{" "}
            </span>
            <Link to='/signup' className='text-accent hover:underline'>
              {t("auth.login.signupLink")}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
