import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import { NavItem } from "./components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCookiesProvider } from "@/hooks/useCookiesClient";
import { useCookies } from 'next-client-cookies';

interface Props {
  onSidebarOpen: () => void;
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const pathname = usePathname();
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={"img"}
          src={
            mode === "light" && !colorInvert
              ? "https://assets.static-upwork.com/org-logo/810370216118648832?date=1702622844532"
              : "https://ntsprint.com/wp-content/uploads/2023/06/NTS-LOGO-1.png"
          }
          height={mode === "light" && !colorInvert ? 55 : 1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        {/* <Box>
          <NavItem
            title={"Landings"}
            id={"landing-pages"}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"Company"}
            id={"company-pages"}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"Account"}
            id={"account-pages"}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"Pages"}
            id={"secondary-pages"}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"Blog"}
            id={"blog-pages"}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={"Portfolio"}
            id={"portfolio-pages"}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        <Box marginLeft={4}>
          <Link
            // variant="contained"
            color={theme.palette.primary.light}
            // component="a"
            // target="blank"
            href={`/auth/signin`}
            // size="large"
            style={{
              textDecoration: "none",
              color: theme.palette.primary.light,
            }}
          >
            Sign In
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            // variant="contained"
            color={theme.palette.primary.light}
            // component="a"
            // target="blank"
            href={`/auth/signup`}
            // size="large"
            style={{
              textDecoration: "none",
              color: theme.palette.primary.light,
            }}
          >
            Sign Up
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
