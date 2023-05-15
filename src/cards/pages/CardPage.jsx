import { Container, Typography } from "@mui/material";
import React, { useCallback, useContext, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
import { SearchContext } from "../../providers/SearchProvider";

export default function CardPage() {
  const { search, renderNoResult } = useContext(SearchContext);
  const {
    value: { cards, error, isLoading },
    handleGetCards,
    handleDeleteCard,
  } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    await handleDeleteCard(id);
    handleGetCards();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />

        {useEffect(() => {
          if (renderNoResult) {
            <Typography variant="h5" color={"error"}>
              No results for your search!
            </Typography>;
          }
        }, [search])}
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
