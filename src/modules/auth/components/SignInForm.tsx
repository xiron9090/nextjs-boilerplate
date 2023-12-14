"use client";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AuthLoginTypeRequest } from "../types/auth.interface";
import Input from "@mui/material/Input";
import { signInAction } from "../actions/auth.actions";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidationSignIn } from "../validations/auth.validation";
const SignInForm = () => {
  const t = useTranslations();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting, isLoading },
  } = useForm<AuthLoginTypeRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(
      schemaValidationSignIn({
        emailMessage: t("auth.signIn.emailErrorMessage"),
        emailMessageRequired: t("auth.signIn.emailMessageRequired"),
        passwordMessageMin: t("auth.signIn.passwordErrorMessageMin"),
        passwordMessageRequired: t("auth.signIn.passwordMessageRequired"),
      })
    ),
  });
  const action: () => void = handleSubmit(async (data) => {
    console.log("this", errors);
    const response = await signInAction(data);
    console.log("client", response);
  });
  // const onSubmit: SubmitHandler<AuthLoginTypeRequest> =  (data) => {
  //   'use server'
  //   console.log(data)
  // }
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
          }}
          gutterBottom
          color={"text.secondary"}
          fontWeight={700}
        >
          {t("auth.signIn.login")}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          {t("app.title")}
        </Typography>
        {/* <Typography color="text.secondary">
          Login to manage your account.
        </Typography> */}
      </Box>
      <form action={action}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            {/* <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your email
            </Typography> */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : null}
                  label={`${t("auth.signIn.email")} *`}
                  variant="outlined"
                  type={"email"}
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent={"end"}
              width={1}
              marginBottom={2}
            >
              <Typography variant={"subtitle2"}>
                <Link color={"primary"} href={"#"}>
                  {t("auth.signIn.linkForgotPassword")}
                </Link>
              </Typography>
            </Box>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : null}
                  label={`${t("auth.signIn.password")} *`}
                  variant="outlined"
                  type={"password"}
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "center" }}
              justifyContent={"space-between"}
              width={1}
              maxWidth={600}
              margin={"0 auto"}
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant={"subtitle2"}>
                  {t("auth.signIn.textNewAccount")}{" "}
                  <Link color={"primary"} href={"#"}>
                    {t("auth.signIn.linkSignUp")}
                  </Link>
                </Typography>
              </Box>
              <Button
              
                disabled={!isValid || !isDirty}
                size={"large"}
                variant={"contained"}
                type={"submit"}
              >
                {t("auth.signIn.btnLogin")}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SignInForm;
