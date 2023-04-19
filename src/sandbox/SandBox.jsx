import { AppBar, Button, Container, Toolbar } from "@mui/material";
import React, { useState } from "react";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import NavItem from "../routes/components/NavItem";

import NestedNavBar from "./homeWork/NestedNavBar";

export default function SandBox() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    console.log("clicked");
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          zIndex: 1,
        }}
      >
=======
import { Navigate, Outlet } from "react-router-dom";
import NavItem from "../routes/components/NavItem";
import ROUTES from "../routes/routesModel";

export default function SandBox() {
  //   const user = {};
  //   user.isAdmin = true;
  //   if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <div>
      <AppBar position="sticky" color="transparent">
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
        <Toolbar>
          <NavItem to="counter" label="Counter Page" sx={{ color: "black" }} />
          <NavItem
            to="mydetails"
            label="My Details Page"
            sx={{ color: "black" }}
          />
          <NavItem
            to="password"
            label="Password Page"
            sx={{ color: "black" }}
          />
          <NavItem to="todo" label="Todo Page" sx={{ color: "black" }} />
          <NavItem
            to="firsteffect"
            label="First Effect Page"
            sx={{ color: "black" }}
          />
          <NavItem
            to="countries"
<<<<<<< HEAD
            label="countries Page"
            sx={{ color: "black" }}
          />
          <NavItem to="render" label="render" sx={{ color: "black" }} />

          <Button onClick={toggleNavbar} sx={{ color: "black" }}>
            Data Display
          </Button>
        </Toolbar>
      </AppBar>
      {showNavbar && <NestedNavBar />}
=======
            label="Coutries Page"
            sx={{ color: "black" }}
          />
          <NavItem to="render" label="Render" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
