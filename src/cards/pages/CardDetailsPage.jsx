import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

export default function CardDetailsPage() {
  const { id } = useParams();
  return (
    <Container>
<<<<<<< HEAD
      <PageHeader title="Card details" subtitle="this is subtitle" />
      <Typography>Details about card : {id}</Typography>
=======
      <PageHeader
        title="Card details"
        subtitle="Here you can find all the dateils about specific card"
      />
      <Typography>Details about card: {id}</Typography>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    </Container>
  );
}
