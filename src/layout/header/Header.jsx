<<<<<<< HEAD
import { Button } from "@mui/material";
import Menu from "./topNavBar/menu class/menu/Menu";
import { useMenu } from "./topNavBar/menu class/menu/MenuProvider";

import NavBar from "./topNavBar/NavBar";

export default function Header() {
  return (
    <>
      <NavBar />
    </>
  );
=======
import React from "react";
import Logo from "./topNavBar/logo/Logo";
import LogoIcon from "./topNavBar/logo/LogoIcon";
import NavBar from "./topNavBar/NavBar";

export default function Header() {
  return <NavBar />;
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
}
