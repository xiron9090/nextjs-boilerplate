"use client";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useCookies } from "next-client-cookies";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { schemaValidationSignIn } from "../validations/auth.validation";
import { signInAction } from "../actions/auth.actions";
import { AuthLoginTypeRequest } from "../types/auth.interface";

interface SignInFormProps {}

const SignInForm: FC<SignInFormProps> = () => {
  const t = useTranslations();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
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
  const cookies = useCookies();
  const action: () => void = handleSubmit(async (data) => {
    const response = await signInAction(data);
    if (response.error) {
      toast.error(response.error.message);
      reset();
    }
    if (response.data.session) {
      cookies.set("userToken", response.data.session?.access_token!);
      toast.success("Welcome");
      router.replace("/");
    }
  });
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
          }}
          gutterBottom
          color="text.secondary"
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
      <form onSubmit={action}>
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
                  type="email"
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
              justifyContent="end"
              width={1}
              marginBottom={2}
            >
              <Typography variant="subtitle2">
                <Link color="primary" href="#">
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
                  type="password"
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
              justifyContent="space-between"
              width={1}
              maxWidth={600}
              margin="0 auto"
            >
              <Box marginBottom={{ xs: 1, sm: 0 }}>
                <Typography variant="subtitle2">
                  {t("auth.signIn.textNewAccount")}{" "}
                  <Link color="primary" href="#">
                    {t("auth.signIn.linkSignUp")}
                  </Link>
                </Typography>
              </Box>
              <Button
                disabled={!isValid || !isDirty}
                size="large"
                variant="contained"
                type="submit"
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
