import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "98%",
  height: "400px",
};

const center = {
  lat: 25.7747,
  lng: -80.2313,
};

const markerSpeedyPosition = {
  lat: 25.7747,
  lng: -80.2313,
};

const GoogleMapComponent: React.FC = () => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return <div>Error: Google Maps API Key is INVALID</div>;
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={markerSpeedyPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
