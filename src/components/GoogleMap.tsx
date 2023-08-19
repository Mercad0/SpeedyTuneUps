import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

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
        <InfoWindow
          position={markerSpeedyPosition}
          aria-label="Speedy Tune-Ups Address"
        >
          <div className="bg-white p-2 rounded shadow-lg">
            <h2 className="text-xl font-semibold">Speedy Tune Ups</h2>
            <p className="text-gray-600">
              130 NW 22nd Avenue in Miami, FL 33125
            </p>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
