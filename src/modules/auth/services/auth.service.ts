import createServerComponentClientCustom from "@/supabase/server";
import { authSupabaseServices } from './supabase/auth.supabase.service';

export const authService = () => {
  return {authSupabaseServices}
};
