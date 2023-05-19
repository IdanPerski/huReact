import { Container, Typography } from "@mui/material";
import React, { useCallback, useContext, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";
// import { SearchContext } from "../../providers/SearchProvider";

export default function CardPage() {
  // const { search, renderNoResult } = useContext(SearchContext);
  const {
    value: { cards, error, isLoading, filterCards },
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
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCards}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}
