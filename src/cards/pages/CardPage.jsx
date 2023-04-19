import { Container } from "@mui/material";
<<<<<<< HEAD
import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";

=======
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import Spinner from "./../../components/Spinner";
import Error from "./../../components/Error";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import useCards from "../hooks/useCards";
import CardsFeedback from "../components/CardsFeedback";

export default function CardPage() {
<<<<<<< HEAD
  //send requset to API
  // getCards();
  // setting states and taking action according to the resposnse from the API

  const {
    value: { cards, error, isLoading },
    handleGetCards,
    handleDeleteCard,
  } = useCards();

  // const { cards, error, isLoading } = value;
=======
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { cards, error, isLoading } = value;
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete = async (id) => {
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
<<<<<<< HEAD

=======
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={cards}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}

/* 


import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import Spinner from "./../../components/Spinner";
import Error from "./../../components/Error";
import { getCards } from "../services/cardApiService";
import useCards from "../hooks/useCards";

export default function CardPage() {
  const { cards, isLoading, error, handleGetCards } = useCards();

 

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="Cards"
          subtitle="On this page you can find all bussines cards from all categories"
        />
        <Cards cards={cards} />
      </Container>
    </div>
  );
}*/
