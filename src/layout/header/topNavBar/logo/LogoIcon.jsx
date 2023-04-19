import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function LogoIcon() {
<<<<<<< HEAD
  return (
    <div>
      <NavBarLink to={ROUTES.ROOT}>
        <IconButton>
          <Avatar src="assets/images/business-card.png" />
        </IconButton>
      </NavBarLink>
    </div>
=======
  //NavBarLink

  //IconButton

  //Avatar

  //IconButton
  //NavBarLink
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <IconButton>
          <Avatar
            src="\assets\images\business-card.png"
            alt="Bussiness card icon"
          />
        </IconButton>
      </NavBarLink>
    </>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  );
}
