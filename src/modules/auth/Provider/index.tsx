'use client';

import { FC, ReactElement, ReactNode, createContext, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Database } from '../../../../database.types';

export const AuthContext = createContext({});
type AuthProviderProps={
    accessToken:string|undefined;
    children:ReactElement
}
const AuthProvider:FC<AuthProviderProps> = ({ accessToken, children }) => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return children;
};

export default AuthProvider;