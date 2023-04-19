import { Box, CardActions, IconButton } from "@mui/material";
import React, { useState } from "react";
<<<<<<< HEAD
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";

import { useUser } from "../../../user/providers/UseProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardActionBar({
  handleDelete,
  handleEdit,
  handleLike,
  id,
  user_id,
}) {
  const { user } = useUser();
  const navigate = useNavigate();

  const [isDialogOpen, setDialog] = useState(false);
  const handleDeleteCard = () => {
    handleDelete(id);
    setDialog(false);
  };

  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?.id === user_id ? (
            <>
              <IconButton
                aria-label="Delete Card"
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit Card"
                onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}
              >
                <ModeEditIcon />
              </IconButton>
            </>
          ) : null}
        </Box>
        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (
            <IconButton
              aria-label="Add to favorite"
              onClick={() => handleLike(id)}
            >
              <FavoriteIcon />
            </IconButton>
          )}
        </Box>
      </CardActions>

      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteCard}
      />
    </>
  );
}

CardActionBar.propTypes = {
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
  handleLike: func.isRequired,
  id: string.isRequired,
};

/* Class */

/* 
import { Box, CardActions, IconButton } from "@mui/material";
import React from "react";
=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
<<<<<<< HEAD
=======
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

export default function CardActionBar({
  handleDelete,
  handleEdit,
  handleLike,
  id,
  user_id,
}) {
  const { user } = useUser();
<<<<<<< HEAD
  console.log(user);
=======
  const [isDialogOpen, setDialog] = useState(false);
  const navigate = useNavigate();
  const handleDeleteCard = () => {
    handleDelete(id);
    setDialog(false);
  };

>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?.id == user_id ? (
            <>
              <IconButton
                aria-label="Delete Card"
<<<<<<< HEAD
                onClick={() => handleDelete(id)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit Card" onClick={() => handleEdit(id)}>
=======
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit Card"
                onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}
              >
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
                <ModeEditIcon />
              </IconButton>
            </>
          ) : null}
        </Box>

        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (
            <IconButton
              aria-label="Add to favorite"
              onClick={() => handleLike(id)}
            >
              <FavoriteIcon />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteCard}
      />
    </>
  );
}

CardActionBar.propTypes = {
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
  handleLike: func.isRequired,
  id: string.isRequired,
};



*/
