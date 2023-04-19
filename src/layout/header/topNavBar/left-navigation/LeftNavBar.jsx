<<<<<<< HEAD
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import { useUser } from "../../../../user/providers/UseProvider";
import { Box, useMediaQuery } from "@mui/material";

export default function LeftNavBar() {
  const { user } = useUser();
  // const isSmall = useMediaQuery((theme) =>
  //   theme.breakpoints.between("xs", "md"),
  // );
  const isMedium = useMediaQuery((theme) => theme.breakpoints.up("md"));
  // const isLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <LogoIcon />
        {isMedium && <Logo />}

        {isMedium && (
          <Box sx={{ display: "flex" }}>
            <NavItem to={ROUTES.CARDS} label="Cards" />
            <NavItem to={ROUTES.ABOUT} label="About" />
            {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorite cards" />}

            {user?.isBusiness && (
              <NavItem to={ROUTES.MY_CARDS} label="My cards" />
            )}
            {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" />}
            {user?.isAdmin && (
              <NavItem to={ROUTES.CREATE_CARD} label="Create Card" />
            )}
          </Box>
        )}
      </Box>
    </>
=======
import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";

export default function LeftNavBar() {
  const { user } = useUser();
  console.log(user);
  return (
    <Box>
      <LogoIcon />

      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
        }}
      >
        <Logo />
        <NavItem to={ROUTES.CARDS} label="Cards" />
        <NavItem to={ROUTES.ABOUT} label="About" />
        {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorite cards" />}
        {user?.isBusiness && <NavItem to={ROUTES.MY_CARDS} label="My cards" />}
        {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" />}
      </Box>
    </Box>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  );
}
