import { SupabaseClient } from "@supabase/supabase-js";

export const userSupabaseServices = (client: SupabaseClient) => {
  const me = async (table: string, id: string) => client.from(table).select("*").eq("id", id).single();
  const updateProfile = async (table: string, id: string, value: any) => client.from(table).update(value);
  const deleteProfile = async (id: string) => client.auth.admin.deleteUser(id);

  return { me, updateProfile, deleteProfile };
};
