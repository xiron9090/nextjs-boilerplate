import Container from "@/components/Container";
import { AuthForm } from "@/modules/auth/components/AuthForm";
import SignUpForm from "@/modules/auth/components/SignUpForm";
import { Box } from "@mui/material";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: 'Sign Up page',
  description: 'Page for Sign Up',
}
interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = () => (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          position="relative"
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display="flex"
            alignItems="center"
            marginRight={{ xs: 0, md: 4 }}
          >
            <Container>
            <SignUpForm />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 2 },
              minHeight: { xs: "auto", md: "100vh" },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: "50vw" },
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    left: "0%",
                    width: 1,
                    height: 1,
                    position: { xs: "relative", md: "absolute" },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: "auto", md: 1 },
                    }}
                  >
                    <Box
                      component="img"
                      src="https://assets.maccarianagency.com/backgrounds/img18.jpg"
                      height={{ xs: "auto", md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                      sx={{
                        objectFit: "cover",
                        // filter:
                        //   theme.palette.mode === "dark"
                        //     ? "brightness(0.7)"
                        //     : "none",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );

export default SignUpPage
