import { useCookies } from 'next-client-cookies';

export function useCookiesProvider() {
    const cookies = useCookies();

    const token = cookies.get('token');
    const refreshtoken = cookies.get('refreshToken') ?? null;

    const nextLocale= cookies.get("NEXT_LOCALE");
    const customDomain = cookies.get("custom-domain");

    const mutateToken = (token: string) => cookies.set("token", token);

    const changeLanguage = (lang: string) => cookies.set("lang", lang, { expires: 365, path: '/' });
    const changeDomain = (domain: string) => cookies.set("custom-domain", domain, { expires: 365, path: '/' });

    return { token, nextLocale, mutateToken, changeLanguage,customDomain,changeDomain }
}