import { Button, Typography } from "@mui/material";
<<<<<<< HEAD
import { node, object, string } from "prop-types";
=======
import { object, string } from "prop-types";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import React from "react";
import NavBarLink from "./NavBarLink";

export default function NavItem({ to, sx, label }) {
  return (
    <NavBarLink to={to} sx={sx}>
      <Button color="inherit">
        <Typography>{label}</Typography>
      </Button>
    </NavBarLink>
  );
}

NavItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
  sx: object,
};
<<<<<<< HEAD

NavItem.defaultProps = {
  sx: { color: "#000" },
};
=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
