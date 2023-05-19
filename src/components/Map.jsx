import React, { useEffect, useState } from "react";
import BingMapsReact from "bingmaps-react";
import { Box } from "@mui/material";
export default function Map() {
  const bingApiKey = process.env.BING_API_KEY;
  const bingCoordinatesKey = process.env.BING_KEY_;
  const [viewOptions, setViewOptions] = useState({
    center: { latitude: 32.08088, longitude: 34.78057, heading: "0" },
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.bing.com/api/maps/mapcontrol?key=${bingApiKey}&callback=onBingMapsLoaded`;
    script.async = true;
    script.defer = true;

    window.onBingMapsLoaded = () => {
      setIsLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });
  console.log(viewOptions);
  function init() {
    console.log("init");

    const coordRequest = fetch(
      `http://dev.virtualearth.net/REST/v1/Locations?countryRegion=israel&addressLine=tel-aviv&key=AjtUzWJBHlI3Ma_Ke6Qv2fGRXEs0ua5hUQi54ECwfXTiWsitll4AkETZDihjcfeI`,
    );

    coordRequest
      .then((response) => response.json())
      .then((data) => {
        console.log(data.resourceSets[0].resources[0]);
        // console.log(data);
        const latitude =
          data.resourceSets[0].resources[0].geocodePoints.coordinates[0];
        const longitude =
          data.resourceSets[0].resources[0].geocodePoints.coordinates[1];
        // setViewOptions({
        //   center: { latitude: latitude, longitude: longitude, heading: "0" },
        // });
        // process the data here
      })
      .catch((error) => console.error(error));
  }
  init();

  // useEffect(() => init(), []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <BingMapsReact
        bingMapsKey="AjNbBHjALkQqQBdu8_qUBk3RAV-gaPo9Ed8PKYOjqHJnocH20UZSyFQm6oab822j"
        height="75vh"
        width="75vw"
        // mapOptions={{
        //   navigationBarMode: "square",
        // }}
        viewOptions={{ ...viewOptions }}

        // countryRegion={"israel"}
        // viewOptions={{
        //   center: { latitude: 42.360081, longitude: -71.058884 },
        //   mapTypeId: "grayscale",
        // }}
      />
    </Box>
  );
}

// http://dev.virtualearth.net/REST/v1/Locations?countryRegion=israel&addressLine=holon&key=AjNbBHjALkQqQBdu8_qUBk3RAV-gaPo9Ed8PKYOjqHJnocH20UZSyFQm6oab822j
