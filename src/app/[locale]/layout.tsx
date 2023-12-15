import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode, Suspense } from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import supabase from "@/supabase/server";
import AuthProvider from "@/modules/auth/Provider";
import { CookiesProvider } from "next-client-cookies/server";
import createServerComponentClientCustom from "@/supabase/server";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`../../i18n/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  const {
    data: { session },
  } = await(await createServerComponentClientCustom()).auth.getSession();
  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          // charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title>{process.env.APP_NAME}</title>
      </head>
      <body style={{ margin: 0 }}>
        <Suspense>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <CookiesProvider>
              <AuthProvider accessToken={session?.access_token}>
                <ThemeProvider>{children}</ThemeProvider>
              </AuthProvider>
            </CookiesProvider>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
