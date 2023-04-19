import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

export default function CardDetailsPage() {
  const { id } = useParams();
  return (
    <Container>
      <PageHeader title="Card details" subtitle="this is subtitle" />
      <Typography>Details about card : {id}</Typography>
    </Container>
  );
}
