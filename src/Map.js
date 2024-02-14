import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

import "./App.css";

const libraries = ["places"]; 

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAlPbyceaWa75wtjv7U4etyl0I-R2Tdmdw",
    libraries,
  });

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
    // Diğer marker'lar...
  ]);

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  if (loadError) return "Harita yüklenirken hata oluştu";
  if (!isLoaded) return "Harita yükleniyor...";

  return (
    <Fragment>
      <div className="container">
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMap
            center={{ lat: 40.3947365, lng: 49.6898045 }}
            zoom={5}
            mapTypeId="satellite"
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: "100%", height: "100vh" }}
          >
            {markers.map(({ id, position, color, info }) => (
              <Marker
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
                icon={{
                  url: "./icon.svg",
                  scaledSize: { width: 24, height: 24 },
                }}
              >
                {activeMarker === id ? (
                  <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                    <div>
                      <p>{info}</p>
                    </div>
                  </InfoWindow>
                ) : null}
              </Marker>
            ))}
          </GoogleMap>
        </div>
      </div>
    </Fragment>
  );
}

export default Map;