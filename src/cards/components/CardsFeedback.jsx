import React from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";
import { Typography } from "@mui/material";
// import useCards from "../hooks/useCards";

export default function CardsFeedback({
  isLoading,
  cards,
  error,
  handleDelete,
}) {
  // const { handleGetCards } = useCards();
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
}
