"use client";

import { ReactNode, createContext, useContext } from "react";

export type AppContextProps = {
  me: any;
  lang: "en" | "es";
  theme: "dark" | "light";
  setMe: (user: any) => void;
  setLang: (lang: "en" | "es") => void;
  setTheme: (theme: "dark" | "light") => void;
};
const AppContext = createContext<AppContextProps>({
  me: null,
  lang: "en",
  theme: "dark",
  setMe: (user: any) => {},
  setLang: (lang: "en" | "es") => "en",
  setTheme: (theme: "dark" | "light") => "dark",
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  // const localTheme = window.localStorage.getItem("themeMode")?? 'dark';

  <AppContext.Provider
    value={{
      me: null,
      lang: "en",
      theme: "light",
      setMe: (user: any) => {},
      setLang: (lang: "en" | "es") => "en",
      setTheme: (theme: "dark" | "light") => "dark",
    }}
  >
    {children}
  </AppContext.Provider>
);

export const useAppContext = () => useContext(AppContext);
