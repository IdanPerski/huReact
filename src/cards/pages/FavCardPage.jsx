import React, { useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";

import { Container } from "@mui/material";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { SearchContext } from "../../providers/SearchProvider";
import PageHeader from "../../components/PageHeader";
export default function FavCardPage() {
  const { search, renderNoResult } = useContext(SearchContext);
  const {
    value: { cards, error, isLoading },
    handleGetFavCards,
    handleDeleteCard,
  } = useCards();

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetFavCards();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Favoirte Cards"
          subtitle="On this page you can find all bussines you Favoite cards from all categories"
        />

        {renderNoResult ? (
          <Typography variant="h5">No results for your search!</Typography>
        ) : null}
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={search.length == 0 ? cards : search}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
