"use server";
import createServerComponentClientCustom from "@/config/supabase/server";
import { AuthLoginTypeRequest } from "../types/auth.interface";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import createClientComponentClient from "../../../config/supabase/client";
import createServerComponentClient from "@/config/supabase/server";
import { authService } from "../services/auth.service";
import { cookies } from "next/headers";

export async function signInAction({ email, password }: AuthLoginTypeRequest) {
  const result = await authService()
    .authSupabaseServices(await createServerComponentClient())
    .signIn({
      // email: "xiron@demo.com",
      // password: "12345678",
      email,
      password,
    });
  cookies().set("userToken", result.data.session?.access_token!);
  return result;
}
export async function signUpAction({ email, password }: AuthLoginTypeRequest) {
  const result = await authService()
    .authSupabaseServices(await createServerComponentClient())
    .singUp({
      email,
      password,
    });
  return result;
}

export async function getUser() {
  const user = await (await createServerComponentClientCustom()).auth.getUser();
  return user;
}
