import {
  AuthTokenResponse,
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
  SupabaseClient,
  AuthError,
  AuthResponse,
  OAuthResponse,
  SignInWithOAuthCredentials,
} from "@supabase/supabase-js";

export const authSupabaseServices=(client:SupabaseClient)=>{
   const signIn=async(
    input: SignInWithPasswordCredentials
  ) => client.auth.signInWithPassword(input)
  const singUp =async(input: SignUpWithPasswordCredentials)=> client.auth.signUp(input)
  const forgotPassword=async(
    email: string,
    options: {
      redirectTo?: string;
      captchaToken?: string;
    } = {}
  )=>client.auth.resetPasswordForEmail(
      email,
      options
    )
  const singInWithSocialMedia=async(
    input: SignInWithOAuthCredentials
  )=>client.auth.signInWithOAuth(input)
  return {signIn,singUp,forgotPassword,singInWithSocialMedia}

}