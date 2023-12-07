import { getTranslations } from "next-intl/server";

const SignInForm = async () => {
  const t = await getTranslations();
  return <h1>{t("login")}</h1>;
};

export default SignInForm;
