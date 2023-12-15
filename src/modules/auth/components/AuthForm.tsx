"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa, ViewType } from "@supabase/auth-ui-shared";
import supabase from "@/supabase/client";
import { useTranslations } from "next-intl";
import { useTheme } from "@mui/material";
import { FC } from "react";
// import { Database } from './database.types'
type AuthFormProps = {
  view: ViewType;
};
export const AuthForm: FC<AuthFormProps> = ({ view }) => {
  //   const supabase = createClientComponentClient()
  const t = useTranslations();
  const theme = useTheme();
  return (
    <Auth
      supabaseClient={supabase}
      view={view}
      localization={{
        variables: {
          sign_in: {
            email_input_placeholder: t("auth.signIn.email"),
            email_label: t("auth.signIn.email"),
            password_label: t("auth.signIn.password"),
            password_input_placeholder: t("auth.signIn.password"),
            button_label: t("auth.signIn.btnLogin"),
          },
        },
      }}
      providers={view==='sign_in'?["google", "facebook", "twitter", "apple"]:[]
      }
      appearance={{ theme: ThemeSupa }}
      theme={theme.palette.mode}
      showLinks={true}
      //   providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
};
