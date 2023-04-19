import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
<<<<<<< HEAD
import { MenuProvider } from "./menu class/menu/MenuProvider";

=======
import Logo from "./logo/Logo";
import LogoIcon from "./logo/LogoIcon";
import { MenuProvider } from "./menu/MenuProvider";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import RightNavBar from "./right-navigation/RightNavBar";

export default function NavBar() {
  return (
    <MenuProvider>
      <AppBar position="sticky" color="primary" elevation={10}>
<<<<<<< HEAD
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <LeftNavBar />

=======
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LeftNavBar />
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
          <RightNavBar />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
