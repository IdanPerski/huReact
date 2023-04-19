import { node, object, string } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBarLink({ to, children, sx }) {
  return (
    <Link to={to} style={{ ...sx, textDecoration: "none" }}>
      {children}
    </Link>
  );
}

NavBarLink.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
  sx: object,
};

NavBarLink.defaultProps = {
  sx: { color: "#000" },
};
<<<<<<< HEAD
=======


>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
