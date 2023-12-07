import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface AuthLayoutWrapperProps {
  children: ReactNode;
}

const AuthLayoutWrapper: FC<AuthLayoutWrapperProps> = ({ children }) => {
  return <>
  
  {children}
  </>
};

export default AuthLayoutWrapper;
