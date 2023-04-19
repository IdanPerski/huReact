<<<<<<< HEAD
import React from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";
import { Typography } from "@mui/material";
// import useCards from "../hooks/useCards";

export default function CardsFeedback({
=======
import { Typography } from "@mui/material";
import React, { memo } from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";

export default memo(function CardsFeedback({
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  isLoading,
  cards,
  error,
  handleDelete,
}) {
<<<<<<< HEAD
  // const { handleGetCards } = useCards();
=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (cards) return <Cards cards={cards} handleDelete={handleDelete} />;
  return null;
<<<<<<< HEAD
}
=======
});
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
