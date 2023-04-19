import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
<<<<<<< HEAD
import { useMenu } from "../menu class/menu/MenuProvider";
=======

import { useMenu } from "../menu/MenuProvider";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

const MoreButton = () => {
  const setOpen = useMenu();
  return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
      <IconButton
        onClick={() => setOpen(true)}
        size="large"
        color="inherit"
        aria-label="menu"
<<<<<<< HEAD
        sx={{ display: { xs: "inline-flex" } }}
=======
        sx={{ display: { xs: "inline-flex", md: "none" } }}
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
      >
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

export default MoreButton;
