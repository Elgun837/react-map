import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MarkerClusterer } from "@react-google-maps/api";
import "./App.css";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
const App = () => {
  const { t, i18n } = useTranslation();

  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: { lat: 39.3554202, lng: 46.6780096 },
      info: t("project.zabux.name"),
      customer: t("project.zabux.client"),
      image_1: "./images/zabux-1(1).jpeg",
      image_2: "./images/zabux-1(2).jpeg",
      image_3: "./images/zabux-1(3).jpeg",
      image_4: "./images/zabux-1(4).jpeg",
      image_5: "./images/zabux-1(5).jpeg",
      class: "aze",
    },
    {
      id: 2,
      position: { lat: 43.79235, lng: 57.780494 },
      info: "Mərkəzı Asiya Regional İqtisadi Əməkdaşlıq Təşkilatı Dəhlizi 2 Qaraqalpaqstan Yol Layihəsi (A380 Kunqrad - Daut-Ata Hissəsi) – 120 km",
      customer: "Özbəkistan Respublikası Dövlət Yol Komitəsi",
      image_1: "./images/zabux-1(1).jpeg",
      image_2: "./images/zabux-1(2).jpeg",
      image_3: "./images/zabux-1(3).jpeg",
      image_4: "./images/zabux-1(4).jpeg",
      image_5: "./images/zabux-1(5).jpeg",
      class: "uzb",
    },
    {
      id: 3,
      position: { lat: 39.645274, lng: 47.166514 },
      info: "Ağdam-Füzuli Yolunun Tikintisi (0-32 km)",
      customer: "Azərbaycan Avtomobil Yolları Dövlət Agentliyi",
      image_1: "./images/zabux-1(1).jpeg",
      image_2: "./images/zabux-1(2).jpeg",
      image_3: "./images/zabux-1(3).jpeg",
      image_4: "./images/zabux-1(4).jpeg",
      image_5: "./images/zabux-1(5).jpeg",
      class: "aze",
    },
  ]);
  
  useEffect(() => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => ({
        ...marker,
        info: t("project.zabux.name"),
        customer: t("project.zabux.client"),
        // Update the other translated fields as needed
      }))
    );
  }, [t]);

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const clusterOptions = {
    clusterClass: "custom-cluster-icon",
    styles: [
      {
        textColor: "black",
        url: "/images/holder.svg", // Provide the path to your custom cluster icon
        height: 36, // Set the desired height
        width: 36, // Set the desired width
      },
    ],
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setOverlayVisible(true);
  };

  const handleOverlayClose = () => {
    setSelectedMarker(null);
    setOverlayVisible(false);
  };

  const defaultCenter = {
    lat: 40,
    lng: 40,
  };

  const [center, setCenter] = useState(defaultCenter);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };




  return (
    <>
      <div className="language_change">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <button onClick={() => changeLanguage("az")}>AZ</button>
      </div>
      <img
        className="logo_absolute"
        src={process.env.PUBLIC_URL + "/images/logo.svg"}
        alt="Logo"
      />
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
                  <Marker
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
                    <Modal
                      markerInfo={selectedMarker}
                      onClose={handleOverlayClose}
                    />
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
