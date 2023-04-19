<<<<<<< HEAD
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Country from "./Country";
import Show2Countries from "./Show2Countries";

export default function Countries() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  const displySelectedCountry1 = () => {
    console.log("displayFunction");
  };
  const displySelectedCountry2 = () => {
    console.log("displayFunction");
  };

  return (
    <div>
      <Show2Countries
        func1={displySelectedCountry1}
        func2={displySelectedCountry2}
      />

      {countryData ? (
        countryData.map((country, i) => {
          return (
            <Country
              flag={country.flags.png}
              country={country.name.common}
              capital={country.capital?.[0]}
              key={i}
            />
          );
        })
      ) : (
        <Typography> "loading..."</Typography>
      )}
=======
import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Country2 from "./Country2";

export default function Countries() {
  //יש לייבא את כל המדינות מהרסט אייפיאיי שעבדנו איתו בעבר
  //ולהציג את התוצאה בלוג
  const [countries, setCountries] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // const getData = async () => {
    //   let result = await fetch("https://restcountries.com/v3.1/all");
    //   result = await result.json();
    //   setCountries(result);
    // };
    // getData();

    console.log("fetching....");
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, [refresh]);

  return (
    <div>
      <Button onClick={() => setRefresh(!refresh)}>Refresh</Button>
      {countries
        ? countries.map((country, i) => {
            return <Country2 country={country} key={JSON.stringify(country)} />;
          })
        : "Loading..."}
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    </div>
  );
}
