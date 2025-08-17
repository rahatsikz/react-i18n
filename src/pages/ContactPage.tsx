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
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useNestedTranslations } from "@/hooks/use-nested-translation";

export default function ContactPage() {
  const t = useNestedTranslations();

  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6'>
            {t("contact.title")}
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            {t("contact.subtitle")}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className='font-playfair text-2xl'>
                {t("contact.sendButton")}{" "}
                {/* Or a custom "Send us a message" key */}
              </CardTitle>
              <CardDescription>
                {t("contact.subtitle")} {/* Or a separate description key */}
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>{t("contact.name")}</Label>
                <Input id='name' placeholder={t("contact.name")} />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>{t("contact.email")}</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder={t("contact.email")}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='subject'>{t("contact.subject")}</Label>
                <Input id='subject' placeholder={t("contact.subject")} />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>{t("contact.message")}</Label>
                <Textarea
                  id='message'
                  placeholder={t("contact.message")}
                  rows={5}
                />
              </div>
              <Button className='w-full bg-accent hover:bg-accent/90 text-accent-foreground'>
                {t("contact.sendButton")}
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className='space-y-8'>
            <Card>
              <CardContent className='p-6'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center'>
                    <Mail className='h-6 w-6 text-accent-foreground' />
                  </div>
                  <div>
                    <h3 className='font-semibold'>
                      {t("contact.info.email.label")}
                    </h3>
                    <p className='text-muted-foreground'>
                      {t("contact.info.email.value")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center'>
                    <Phone className='h-6 w-6 text-accent-foreground' />
                  </div>
                  <div>
                    <h3 className='font-semibold'>
                      {t("contact.info.phone.label")}
                    </h3>
                    <p className='text-muted-foreground'>
                      {t("contact.info.phone.value")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center'>
                    <MapPin className='h-6 w-6 text-accent-foreground' />
                  </div>
                  <div>
                    <h3 className='font-semibold'>
                      {t("contact.info.address.label")}
                    </h3>
                    <p className='text-muted-foreground'>
                      {t("contact.info.address.value")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
