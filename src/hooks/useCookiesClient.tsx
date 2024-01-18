import { useCookies } from "next-client-cookies";

export function useCookiesProvider() {
  const cookies = useCookies();

  const token = cookies.get("userToken");
  const socialToken0 = cookies.get("sb-tzojakphclpcukzqxznp-auth-token.0");
  const socialToken1 = cookies.get("sb-tzojakphclpcukzqxznp-auth-token.1");
  const tokenSupabase = cookies.get("sb-tzojakphclpcukzqxznp-auth-token");

  const nextLocale = cookies.get("NEXT_LOCALE");
  const customDomain = cookies.get("custom-domain");

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const mutateToken = (token: string) => cookies.set("token", token);

  const changeLanguage = (lang: string) =>
    cookies.set("lang", lang, { expires: 365, path: "/" });
  const changeDomain = (domain: string) =>
    cookies.set("custom-domain", domain, { expires: 365, path: "/" });

  return {
    token,
    tokenSupabase,
    socialToken0,
    socialToken1,
    nextLocale,
    mutateToken,
    changeLanguage,
    customDomain,
    changeDomain,
  };
}
