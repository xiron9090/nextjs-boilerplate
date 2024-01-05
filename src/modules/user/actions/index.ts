import { userService } from "../services/user.service";
import createServerComponentClient from "@/config/supabase/server";

export async function getUserData(id: string) {
  const userData = await userService()
    .userSupabaseServices(await createServerComponentClient())
    .me("user_profile", id);
  return userData;
}
