import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function Country2({ country }) {
<<<<<<< HEAD
=======
  if (!country) return null;
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  return (
    <Box display="flex" sx={{ justifyContent: "space-between" }}>
      <Avatar src={country.flags.png} alt={`${country.name.common} flag`} />
      <Typography sx={{ width: "150px" }}>{country.name.common}</Typography>
      <Typography sx={{ width: "150px" }}>{country.capital?.[0]}</Typography>
    </Box>
  );
}
