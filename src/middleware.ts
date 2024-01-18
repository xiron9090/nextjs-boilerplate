// import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { locales } from "./navigation";
import { Database } from "../database.types";

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "as-needed",
  defaultLocale: "en",
});

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  res.cookies.set("supabaseUrl", process.env.NEXT_PUBLIC_SUPABASE_URL!);
  res.cookies.set("supabaseKey", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser(cookies().get("userToken")?.value);

  // console.log("this user", user);
  const { data: profile } = await supabase
    .from("users_profile")
    .select('*').eq("id",user?.id!).single()

   

  console.log("this profile", req.nextUrl.pathname);
  if (req.nextUrl.pathname.includes('auth') && user) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (
    req.nextUrl.pathname === `/${req.nextUrl.pathname.split("/")[1]}/admin` &&
    profile?.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(`${req.url}home`);
  }
  if (req.nextUrl.pathname === `/${req.nextUrl.pathname.split("/")[1]}/auth`) {
    return NextResponse.redirect(`${req.url}/signing`);
  }
  // if (!user && (req.nextUrl.pathname === "/" ||req.nextUrl.pathname === "/home" )) {
  //   return NextResponse.redirect(new URL('/auth/signing', req.url));
  // }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
