"use server";
import { AuthLoginTypeRequest } from "../types/auth.interface";

export async function signInAction({ email, password }: AuthLoginTypeRequest) {
  const loggedContent = `entered name: ${email} ${password}`;
  console.log(loggedContent);
  return loggedContent;
}
