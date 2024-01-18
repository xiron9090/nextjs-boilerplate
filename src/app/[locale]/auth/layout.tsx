import Main from "@/layouts/Main";
import { Suspense } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
    <Main>
      <Suspense>{children}</Suspense>
    </Main>
  );
export default AuthLayout;
