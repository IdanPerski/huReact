<<<<<<< HEAD
import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Country({ flag, country, capital }) {
  return (
    <div>
      <Box sx={{ width: "100%", m: " 2rem auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar src={flag}></Avatar>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">{country}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">{capital}</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
=======
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export default function Country({ country }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 5,
        }}
      >
        <Avatar
          alt={`${country.name.common} flage image`}
          src={country.flags.png}
        />
        <Typography sx={{ width: 150 }}>{country.name.common}</Typography>
        <Typography sx={{ width: 150 }}>{country.capital?.[0]}</Typography>
      </Box>
    </>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  );
}
