import { Grid } from "@mui/material";
import React from "react";
import cardType from "../models/types/cardType";
import CardBussinesComponent from "./card/CardBussinesComponent";
import { arrayOf } from "prop-types";
import { useUser } from "../../user/providers/UseProvider";

export default function Cards({ cards, handleDelete, onLike }) {
  const handleEdit = (id) => {
    console.log(`Card ${id} is Edited`);
  };
  return (
    <>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardBussinesComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              onLike={onLike}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
