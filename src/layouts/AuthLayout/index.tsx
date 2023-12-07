import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

interface AuthLayoutWrapperProps {
  children: ReactNode;
}

const AuthLayoutWrapper: FC<AuthLayoutWrapperProps> = ({ children }) => {
  return <Box m={0} >
    {children}
  </Box>;
};

export default AuthLayoutWrapper;
