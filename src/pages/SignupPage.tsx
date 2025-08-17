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
import { Checkbox } from "../components/ui/checkbox";
import { Link } from "@/link";
import { useNestedTranslations } from "@/hooks/use-nested-translation";

export default function SignupPage() {
  const t = useNestedTranslations();

  return (
    <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <CardTitle className='font-playfair text-2xl'>
            {t("auth.signup.title")}
          </CardTitle>
          <CardDescription>{t("auth.signup.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='firstName'>{t("auth.signup.firstName")}</Label>
              <Input id='firstName' placeholder={t("auth.signup.firstName")} />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='lastName'>{t("auth.signup.lastName")}</Label>
              <Input id='lastName' placeholder={t("auth.signup.lastName")} />
            </div>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>{t("auth.signup.email")}</Label>
            <Input
              id='email'
              type='email'
              placeholder={t("auth.signup.email")}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>{t("auth.signup.password")}</Label>
            <Input id='password' type='password' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='confirmPassword'>
              {t("auth.signup.confirmPassword")}
            </Label>
            <Input id='confirmPassword' type='password' />
          </div>
          <div className='flex items-center space-x-2'>
            <Checkbox id='terms' />
            <Label htmlFor='terms' className='text-sm text-muted-foreground'>
              {t("auth.signup.terms")}
            </Label>
          </div>
          <Button className='w-full bg-accent hover:bg-accent/90 text-accent-foreground'>
            {t("auth.signup.signupButton")}
          </Button>
          <div className='text-center text-sm'>
            <span className='text-muted-foreground'>
              {t("auth.signup.hasAccount")}{" "}
            </span>
            <Link to='/login' className='text-accent hover:underline'>
              {t("auth.signup.loginLink")}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
