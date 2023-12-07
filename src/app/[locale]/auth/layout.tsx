import AuthLayoutWrapper from "@/layouts/AuthLayout";
import { Suspense } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthLayoutWrapper>
      <Suspense>{children}</Suspense>
    </AuthLayoutWrapper>
  );
};
export default AuthLayout;
