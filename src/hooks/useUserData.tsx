import createClientComponentClient from "@/config/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useCookiesProvider } from "./useCookiesClient";

export const useUserData =  () => {
  const { token } = useCookiesProvider();
const [currentUser,setCurrentUser] = useState<User|null>()
useEffect(()=>{

  createClientComponentClient.auth.getUser(token).then(({data:{user}})=>{
 
    setCurrentUser(user)
  });
},[token])
  return currentUser;
};
