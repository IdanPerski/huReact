import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Container,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import Map from "../../components/Map";

export default function CardDetailsPage() {
  const { id } = useParams();
  const {
    handleGetCard,
    value: { card },
  } = useCards();

  const fetchData = async () => {
    try {
      await handleGetCard(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, handleGetCard]);

  const [cardDetails, setCardDetails] = useState(card);

  const address = () => {
    if (card) {
      const address = card.address;
      return address;
    }
  };
  useEffect(() => {
    const displayCardDetails = (obj) => {
      const convertedObj = Object.entries(obj);
      const slicedArray = convertedObj.slice(1, 7);
      const backToObj = Object.fromEntries(slicedArray);
      setCardDetails((prev) => ({ ...prev, ...backToObj }));
    };

    if (card) displayCardDetails(card);
  }, [card]);

  return (
    <Container>
      <PageHeader title="Card details" subtitle="this is subtitle" />
      {/* <Typography>Details about card : {id}</Typography> */}
      <Card
        sx={{
          width: "80%",
          marginX: "auto",
          marginY: "auto",
          display: "flex",
          flexDirection: "column",
          
        }}
      >
        <Box width={"100%"} display="flex" flexDirection="column">
          <CardHeader
            sx={{ margin: "0 auto" }}
            avatar={
              <Avatar
                sx={{
                  height: "12rem",
                  width: "12rem",
                  display: "flex",
                  alignItems: "center",

                  fontSize: "3.5rem",
                }}
                src={`/${card?.image.url}`}
              ></Avatar>
            }
          />

          <List sx={{ textAlign: "center" }}>
            {cardDetails &&
              Object.keys(cardDetails).map((key) => (
                <ListItemText
                  key={key}
                  primary={key}
                  secondary={cardDetails[key]}
                />
              ))}
          </List>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "43vh",
            maxWidth: "43vw",
            marginX: "auto",
            mt: 2,
            mb: 4,
            overflow: "hidden",
          }}
        >
          {card ? (
            <Map

            // address={`${address().country},${address().city},${
            //   address().street
            // },${address().houseNumber}`}
            />
          ) : (
            <Typography>loading...</Typography>
          )}
        </Box>
      </Card>
    </Container>
  );
}
