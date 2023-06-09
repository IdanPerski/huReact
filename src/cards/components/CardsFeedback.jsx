import React from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";
import { Typography } from "@mui/material";
import { arrayOf, bool, func, object, string } from "prop-types";

// import { Typography } from "prop-types";

export default function CardsFeedback({
  isLoading,
  cards,
  error,
  handleDelete,
  onLike,
}) {
  if (isLoading) return <Spinner />;

  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0) {
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  }
  if (cards)
    return <Cards cards={cards} handleDelete={handleDelete} onLike={onLike} />;
  return null;
}

CardsFeedback.propTypes = {
  isLoading: bool.isRequired,
  error: string,
  cards: arrayOf(object),
  handleDelete: func.isRequired,
  onLike: func.isRequired,
};

CardsFeedback.defaultProps = {
  onLike: () => {},
};
