import Main from "@/layouts/Main";
import { Suspense } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Main>
      <Suspense>{children}</Suspense>
    </Main>
  );
};
export default HomeLayout;
