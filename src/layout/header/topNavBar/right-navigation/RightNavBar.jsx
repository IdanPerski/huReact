import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
<<<<<<< HEAD
import { IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { Box } from "@mui/system";

import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { useUser } from "../../../../user/providers/UseProvider";
import MoreButton from "./MoreButton";

export default function RightNavBar() {
  // const isSmall = useMediaQuery((theme) =>
  //   theme.breakpoints.between("xs", "md"),
  // );
  const isMedium = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  // const isLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();

=======
import { Box, IconButton } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import MoreButton from "./MoreButton";
import NotLogged from "./NotLogged";

export default function RightNavBar() {
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
      <MoreButton />
    </>
  );
}
