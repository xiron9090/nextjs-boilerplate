"use server";
import createServerComponentClientCustom from "@/supabase/server";
import { AuthLoginTypeRequest } from "../types/auth.interface";

export async function signInAction({ email, password }: AuthLoginTypeRequest) {
  const loggedContent =  await(await createServerComponentClientCustom()).auth.signInWithPassword({email: "xiron@demo.com",
  password: "12345678",})
  return loggedContent;
}

export async function getUser() {
const user = await(await createServerComponentClientCustom()).auth.getUser()
return user
  
}
