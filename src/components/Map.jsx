import React, { useEffect, useState } from "react";
import BingMapsReact from "bingmaps-react";
export default function Map({ country, city, street, streerNumber }) {
  const [viewOptions, setViewOptions] = useState({
    center: { latitude: 32.08088, longitude: 34.78057, heading: "0" },
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.bing.com/api/maps/mapcontrol?key=AjNbBHjALkQqQBdu8_qUBk3RAV-gaPo9Ed8PKYOjqHJnocH20UZSyFQm6oab822j&callback=onBingMapsLoaded";
    script.async = true;
    script.defer = true;

    window.onBingMapsLoaded = () => {
      setIsLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  function init() {
    console.log("init");
    const coordRequest = fetch(
      "http://dev.virtualearth.net/REST/v1/Locations?countryRegion=israel&addressLine=holon&key=AjNbBHjALkQqQBdu8_qUBk3RAV-gaPo9Ed8PKYOjqHJnocH20UZSyFQm6oab822j",
    );
    console.log(coordRequest);
    coordRequest
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // process the data here
      })
      .catch((error) => console.error(error));
  }

  init();

  return (
    <>
      <BingMapsReact
        bingMapsKey="AjNbBHjALkQqQBdu8_qUBk3RAV-gaPo9Ed8PKYOjqHJnocH20UZSyFQm6oab822j"
        height="75vh"
        width="75vw"
        // mapOptions={{
        //   navigationBarMode: "square",
        // }}
        viewOptions={{ ...viewOptions }}
        sx={{ zIndex: "-99" }}
        // countryRegion={"israel"}
        // viewOptions={{
        //   center: { latitude: 42.360081, longitude: -71.058884 },
        //   mapTypeId: "grayscale",
        // }}
      />
    </>
  );
}

// http://dev.virtualearth.net/REST/v1/Locations?countryRegion=israel&addressLine=holon&key=AjNbBHjALkQqQBdu8_qUBk3RAV-gaPo9Ed8PKYOjqHJnocH20UZSyFQm6oab822j











