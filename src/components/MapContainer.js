import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const MapContainer = () => {
  const [selected, setSelected] = useState({});

  const onSelect = (item) => {
    setSelected(item);
  };
  const locations = [
    {
      name: "Wednesday 17:00 - 20:00 Saturday 09:00 - 12:00",
      location: {
        lat: 53.645889,
        lng: -2.313441,
      },
    },
    {
      name: "Tuesday & Thursday 12:00 - 16:00",
      location: {
        lat: 53.652534,
        lng: -2.315703,
      },
    },
  ];

  const mapStyles = {
    height: "50vh",
    width: "50%",
  };

  const defaultCenter = {
    lat: 53.648788,
    lng: -2.31849,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDEn9zbKLIfawtRhXgWGZkPPz82chpgYII">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14.6}
        center={defaultCenter}
      >
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
