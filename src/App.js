import React, { useState,useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import { MarkerClusterer } from "@react-google-maps/api";
import "./App.css";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const clusterOptions = { 
    clusterClass: "custom-cluster-icon", 
    styles: [{
      textColor: 'black',
      url: "/images/holder.svg",  // Provide the path to your custom cluster icon
      height: 36,  // Set the desired height
      width: 36,   // Set the desired width
    }],
  };

  
  const defaultCenter = {
    lat: 40,
    lng: 40,
  };
  const [center, setCenter] = useState(defaultCenter);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: { lat: 43, lng: 40 },
      info: t("markerInfo"),
      image_1: "./images/zabux-1(1).jpeg",
      image_2: "./images/zabux-1(2).jpeg",
      image_3: "./images/zabux-1(3).jpeg",
      image_4: "./images/zabux-1(4).jpeg",
      image_5: "./images/zabux-1(5).jpeg",
      class:   "aze"
    },
    {
      id: 2,
      position: { lat: 42.5, lng: 41 },
      info: "Zabux su anbarından qidalanan magistral boru kəmərinin  layihələndirilməsi və tikintisi işləri",
      image_1: "./images/zabux-1(1).jpeg",
      image_2: "./images/zabux-1(2).jpeg",
      image_3: "./images/zabux-1(3).jpeg",
      image_4: "./images/zabux-1(4).jpeg",
      image_5: "./images/zabux-1(5).jpeg",
      class:   "bul"
    },
    
  ]);


  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setOverlayVisible(true);
  };
  const handleOverlayClose = () => {
    setSelectedMarker(null);
    setOverlayVisible(false);
  };
 
 

  return (
    <>
    <img className="logo_absolute" src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="Logo" />
    <LoadScript googleMapsApiKey="AIzaSyAlPbyceaWa75wtjv7U4etyl0I-R2Tdmdw">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5}
        mapTypeId="satellite"
      >
         <MarkerClusterer options={clusterOptions}>
          {(clusterer) => (
            <>
              {markers.map((marker) => (
                <MarkerF
                  key={marker.id}
                  position={marker.position}
                  icon={{
                    url: "./Vector.svg",
                    scaledSize: new window.google.maps.Size(24, 24),
                  }}
                  onClick={() => handleMarkerClick(marker)}
                  clusterer={clusterer}
                />
              ))}

              

              {isOverlayVisible && (
                <>
                  <Overlay onClose={handleOverlayClose} />
                  <Modal markerInfo={selectedMarker} onClose={handleOverlayClose} />
                </>
              )}
            </>
          )}
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>

    </>
  );
};



export default App;
