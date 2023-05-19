import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

import { Container } from "@mui/material";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

import PageHeader from "../../components/PageHeader";
import Spinner from "../../components/Spinner";

export default function FavCardPage() {
  const {
    value: { cards, error, isLoading, filterCards },
    handleGetFavCards,
    handleDeleteCard,
    handleLikeCard,
  } = useCards();

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetFavCards();
  };

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Favorite Cards"
          subtitle="On this page, you can find all the business's favorite cards from all categories"
        />
        {showSpinner ? (
          <Spinner />
        ) : cards == null || filterCards == null ? (
          <Typography variant="h5">Can't find cards!</Typography>
        ) : (
          <CardsFeedback
            isLoading={isLoading}
            error={error}
            cards={filterCards || cards}
            handleDelete={handleDelete}
          />
        )}
      </Container>
    </div>
  );
}
