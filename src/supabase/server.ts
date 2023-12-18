import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../database.types";

const createServerComponentClientCustom = async () => {
  const serverComponentClient = createServerComponentClient<Database>({ cookies });
  return serverComponentClient;
};


export default createServerComponentClientCustom;
