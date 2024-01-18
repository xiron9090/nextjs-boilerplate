import createServerComponentClientCustom from "@/config/supabase/server";
import { authSupabaseServices } from './supabase/auth.supabase.service';

export const authService = () => ({authSupabaseServices});
