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
  ) => {
    return client.auth.signInWithPassword(input);
  
  }
  const singUp =async(input: SignUpWithPasswordCredentials)=> {
    return await client.auth.signUp(input);
  }
  const forgotPassword=async(
    email: string,
    options: {
      redirectTo?: string;
      captchaToken?: string;
    } = {}
  )=>{
    return await client.auth.resetPasswordForEmail(
      email,
      options
    );
  }
  const singInWithSocialMedia=async(
    input: SignInWithOAuthCredentials
  )=>{
    return await client.auth.signInWithOAuth(input);
  }
  return {signIn,singUp,forgotPassword,singInWithSocialMedia}

}