import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useUser } from "../../../../user/providers/UseProvider";
import UserMenu from "../menu-homeWork/UserMenu";
import { useMenu } from "../menu class/menu/MenuProvider";

const Logged = () => {
  const setOpen = useMenu();

  /* 
_________________ this is how I did it my homework for dropDown menu _________
  const { user } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
  }; */

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton
          sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
          /* homeWork---> onClick={handleClick} */ onClick={() => setOpen(true)}
        >
          <Avatar alt="Bird" src="/assets/images/avatar.png" />
        </IconButton>
      </Tooltip>

      {/* my homework for dropDown menu */}
      {/* {user && (
        <UserMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      )} */}
    </>
  );
};

export default Logged;
