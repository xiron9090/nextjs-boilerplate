import createServerComponentClient from "@/config/supabase/server";
import { userService } from "../services/user.service";

export async function getUserData(id: string) {
  const userData = await userService()
    .userSupabaseServices(await createServerComponentClient())
    .me("user_profile", id);
  return userData;
}
