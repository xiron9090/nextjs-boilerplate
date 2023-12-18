"use server";
import createServerComponentClientCustom, {
} from "@/supabase/server";
import { AuthLoginTypeRequest } from "../types/auth.interface";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import createClientComponentClient from "../../../supabase/client";
import createServerComponentClient from "../../../supabase/server";
import { authService } from "../services/auth.service";

export async function signInAction({ email, password }: AuthLoginTypeRequest) {
  const result = await authService().authSupabaseServices(await createServerComponentClient()).signIn({
    email: "xiron@demo.com",
    password: "12345678",
  });
  // const loggedContent =  await(await createServerComponentClientCustom()).auth.signInWithPassword({email: "xiron@demo.com",
  // password: "12345678",})
  // redirect("/");
}

export async function getUser() {
  const user = await (await createServerComponentClientCustom()).auth.getUser();
  return user;
}
