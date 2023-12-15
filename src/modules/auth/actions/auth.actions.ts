"use server";
import supabase from "@/supabase/server";
import { AuthLoginTypeRequest } from "../types/auth.interface";

export async function signInAction({ email, password }: AuthLoginTypeRequest) {
  const loggedContent = await supabase.auth.signInWithPassword({email: "xiron@demo.com",
  password: "12345678",})
  console.log(loggedContent);
  return loggedContent;
}

export async function getUser() {
const user = await supabase.auth.getUser()
return user
  
}
