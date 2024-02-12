import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow
} from "@react-google-maps/api";
import { MarkerClusterer } from "@react-google-maps/api";
const App = () => {
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const defaultCenter = {
    lat: 40,
    lng: 40,
  };

  const [center, setCenter] = useState(defaultCenter);

  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: { lat: 43, lng: 40 },
      color: "red",
      info: "Marker 1 Info",
    },
    {
      id: 2,
      position: { lat: 41, lng: 43 },
      color: "blue",
      info: "Marker 2 Info",
    },
    {
      id: 3,
      position: { lat: 45.3, lng: 41.3 },
      color: "blue",
      info: "Marker 3 Info",
    },
    {
      id: 4,
      position: { lat: 45.5, lng: 41.5 },
      color: "blue",
      info: "Marker 4 Info",
    },
    {
      id: 5,
      position: { lat: 42.7, lng: 44 },
      color: "blue",
      info: "Marker 5 Info",
    },
  ]);

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
    setCenter((prevCenter) => prevCenter);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAlPbyceaWa75wtjv7U4etyl0I-R2Tdmdw">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5}
        mapTypeId="satellite"
      >
        <MarkerClusterer>
          {(clusterer) => (
            <>
              {markers.map((marker) => (
                <MarkerF
                  key={marker.id}
                  position={marker.position}
                  icon={{
                    url: "./icon.svg",
                    scaledSize: new window.google.maps.Size(24, 24),
                  }}
                  onClick={() => handleMarkerClick(marker)}
                  clusterer={clusterer}
                />
              ))}

              {selectedMarker && selectedMarker.position && (
                <InfoWindow
                  position={selectedMarker.position}
                  onCloseClick={handleInfoWindowClose}
                >
                  <div
                    style={{
                      background: selectedMarker.color,
                      padding: "0px",
                    }}
                  >
                    <h2>{selectedMarker.info}</h2>
                  </div>
                </InfoWindow>
              )}
            </>
          )}
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );
};

export default App;