import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const createServerComponentClientCustom = async () => {
  
    const serverComponentClient = createServerComponentClient({ cookies });
    return serverComponentClient;
 
};

export default createServerComponentClientCustom;