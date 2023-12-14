// import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales } from "./navigation";
import createIntlMiddleware from "next-intl/middleware";





const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
});


export default function middleware(req: NextRequest) {
  console.log(req.nextUrl.pathname)
  if (req.nextUrl.pathname === `/${req.nextUrl.pathname.split('/')[1]}/auth`) {
    return NextResponse.redirect(`${req.url}/signin`);
  }

  return intlMiddleware(req);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
