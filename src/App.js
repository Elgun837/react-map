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
  const [activeLanguage, setActiveLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: { lat: 39.3554202, lng: 46.6780096 },
      info: t("project.zabux.name"),
      locate: t("project.zabux.location"),
      customer: t("project.zabux.client"),
      images: [
        "./images/projects/Zabux/zabux(1).webp",
        "./images/projects/Zabux/zabux(2).webp",
        "./images/projects/Zabux/zabux(3).webp",
        "./images/projects/Zabux/zabux(4).webp",
        "./images/projects/Zabux/zabux(5).webp",
      ],
      year: "2022-2023",
      class: "aze",
    },
    {
      id: 2,
      position: { lat: 43.79235, lng: 57.780494 },
      info: t("project.uzbekistan.name"),
      locate: t("project.uzbekistan.location"),
      customer: t("project.uzbekistan.client"),
      images: [
        "./images/projects/Uzbekistan/uzbek(1).webp",
        "./images/projects/Uzbekistan/uzbek(2).webp",
        "./images/projects/Uzbekistan/uzbek(3).webp",
        "./images/projects/Uzbekistan/uzbek(4).webp",
        "./images/projects/Uzbekistan/uzbek(5).webp",
        "./images/projects/Uzbekistan/uzbek(6).webp",
      ],
      year: "2021-2024",
      class: "uzb",
    },
    {
      id: 3,
      position: { lat: 39.645274, lng: 47.166514 },
      info: t("project.agdam.name"),
      locate: t("project.agdam.location"),
      customer: t("project.agdam.client"),
      images: [
        "./images/projects/Agdam/agdam(1).webp",
        "./images/projects/Agdam/agdam(2).webp",
        "./images/projects/Agdam/agdam(3).webp",
        "./images/projects/Agdam/agdam(4).webp",
      ],
      year: "2022-2024",
      class: "aze",
    },
    {
      id: 4,
      position: { lat: 39.641163, lng: 46.4614872 },
      info: t("project.daskesen.name"),
      locate: t("project.daskesen.location"),
      customer: t("project.daskesen.client"),
      images: [
        "./images/projects/Daskesen/daskesen(1).webp",
        "./images/projects/Daskesen/daskesen(2).webp",
        "./images/projects/Daskesen/daskesen(3).webp",
        "./images/projects/Daskesen/daskesen(4).webp",
        "./images/projects/Daskesen/daskesen(5).webp",
        "./images/projects/Daskesen/daskesen(6).webp",
        "./images/projects/Daskesen/daskesen(7).webp",
        "./images/projects/Daskesen/daskesen(8).webp",
      ],
      year: "2021-2024",
      class: "aze",
    },
    {
      id: 441,
      position: { lat: 39.986812, lng: 45.797001 },
      info: t("project.daskesen.name"),
      locate: t("project.daskesen.location"),
      customer: t("project.daskesen.client"),
      images: [
        "./images/projects/Daskesen/daskesen(1).webp",
        "./images/projects/Daskesen/daskesen(2).webp",
        "./images/projects/Daskesen/daskesen(3).webp",
        "./images/projects/Daskesen/daskesen(4).webp",
        "./images/projects/Daskesen/daskesen(5).webp",
        "./images/projects/Daskesen/daskesen(6).webp",
        "./images/projects/Daskesen/daskesen(7).webp",
        "./images/projects/Daskesen/daskesen(8).webp",
      ],
      year: "2021-2024",
      class: "aze",
    },
    {
      id: 442,
      position: { lat: 40.232287, lng: 46.169059 },
      info: t("project.daskesen.name"),
      locate: t("project.daskesen.location"),
      customer: t("project.daskesen.client"),
      images: [
        "./images/projects/Daskesen/daskesen(1).webp",
        "./images/projects/Daskesen/daskesen(2).webp",
        "./images/projects/Daskesen/daskesen(3).webp",
        "./images/projects/Daskesen/daskesen(4).webp",
        "./images/projects/Daskesen/daskesen(5).webp",
        "./images/projects/Daskesen/daskesen(6).webp",
        "./images/projects/Daskesen/daskesen(7).webp",
        "./images/projects/Daskesen/daskesen(8).webp",
      ],
      year: "2021-2024",
      class: "aze",
    },
    {
      id: 5,
      position: { lat: 39.603801, lng: 47.146725 },
      info: t("project.fuzuli.name"),
      locate: t("project.fuzuli.location"),
      customer: t("project.fuzuli.client"),
      images: [
        "./images/projects/Fuzuli/fuzuli(1).webp",
        "./images/projects/Fuzuli/fuzuli(2).webp",
        "./images/projects/Fuzuli/fuzuli(3).webp",
        "./images/projects/Fuzuli/fuzuli(4).webp",
        "./images/projects/Fuzuli/fuzuli(5).webp",
      ],
      year: "2023-2025",
      class: "aze",
    },
    {
      id: 6,
      position: { lat: 29.4146, lng: 47.6581818 },
      info: t("project.mutlaa.name"),
      locate: t("project.mutlaa.location"),
      customer: t("project.mutlaa.client"),
      images: [
        "./images/projects/Mutlaa/mutlaa(1).webp",
        "./images/projects/Mutlaa/mutlaa(2).webp",
        "./images/projects/Mutlaa/mutlaa(3).webp",
        "./images/projects/Mutlaa/mutlaa(4).webp",
      ],
      year: "2019-2021",
      class: "kuveyt",
    },
    {
      id: 7,
      position: { lat: 39.494903, lng: 48.916362 },
      info: t("project.alat.name"),
      locate: t("project.alat.location"),
      customer: t("project.alat.client"),
      images: [
        "./images/projects/Alat/alat(1).webp",
        "./images/projects/Alat/alat(2).webp",
        "./images/projects/Alat/alat(3).webp",
        "./images/projects/Alat/alat(4).webp",
      ],
      year: "2022-2025",
      class: "aze",
    },
    {
      id: 8,
      position: { lat: 40.3783952, lng: 49.8907021 },
      info: t("project.knightsbridge.name"),
      locate: t("project.knightsbridge.location"),
      customer: t("project.knightsbridge.client"),
      images: [
        "./images/projects/Knigtsbridge/knigts(1).webp",
        "./images/projects/Knigtsbridge/knigts(2).webp",
        "./images/projects/Knigtsbridge/knigts(3).webp",
        "./images/projects/Knigtsbridge/knigts(4).webp",
      ],
      year: "2016-2020",
      class: "aze",
    },
    {
      id: 9,
      position: { lat: 40.6770483, lng: 46.3594762 },
      info: t("project.gence.name"),
      locate: t("project.gence.location"),
      customer: t("project.gence.client"),
      images: [
        "./images/projects/Gancamall/gancamall(1).webp",
        "./images/projects/Gancamall/gancamall(2).webp",
        "./images/projects/Gancamall/gancamall(3).webp",
        "./images/projects/Gancamall/gancamall(4).webp",
      ],
      year: "2014-2017",
      class: "aze",
    },
    {
      id: 10,
      position: { lat: 40.3895675, lng: 49.8625503 },
      info: t("project.ritz.name"),
      locate: t("project.ritz.location"),
      customer: t("project.ritz.client"),
      images: [
        "./images/projects/Ritz/ritz(1).webp",
        "./images/projects/Ritz/ritz(2).webp",
        "./images/projects/Ritz/ritz(3).webp",
        "./images/projects/Ritz/ritz(4).webp",
        "./images/projects/Ritz/ritz(5).webp",
        "./images/projects/Ritz/ritz(6).webp",
      ],
      year: "2018-2022",
      class: "aze",
    },
    {
      id: 11,
      position: { lat: 40.3752158, lng: 49.8595349 },
      info: t("project.portbaku.name"),
      locate: t("project.portbaku.location"),
      customer: t("project.portbaku.client"),
      images: [
        "./images/projects/Portbaku/portbaku(1).webp",
        "./images/projects/Portbaku/portbaku(2).webp",
        "./images/projects/Portbaku/portbaku(3).webp",
        "./images/projects/Portbaku/portbaku(4).webp",
        "./images/projects/Portbaku/portbaku(5).webp",
        "./images/projects/Portbaku/portbaku(6).webp",
      ],
      year: "2011-2015",
      class: "aze",
    },
    {
      id: 12,
      position: { lat: 39.5751946, lng: 48.9564442 },
      info: t("project.salyan.name"),
      locate: t("project.salyan.location"),
      customer: t("project.salyan.client"),
      images: [
        "./images/projects/Salyan/salyan(1).webp",
        "./images/projects/Salyan/salyan(2).webp",
        "./images/projects/Salyan/salyan(3).webp",
      ],
      year: "2021-2025",
      class: "aze",
    },
    {
      id: 13,
      position: { lat: 40.3755291, lng: 49.8609641 },
      info: t("project.portbaku_2.name"),
      locate: t("project.portbaku_2.location"),
      customer: t("project.portbaku_2.client"),
      images: [
        "./images/projects/Portbaku_2/portbaku_2(1).webp",
        "./images/projects/Portbaku_2/portbaku_2(2).webp",
        "./images/projects/Portbaku_2/portbaku_2(3).webp",
        "./images/projects/Portbaku_2/portbaku_2(4).webp",
      ],
      year: "2012-2014",
      class: "aze",
    },
    {
      id: 14,
      position: { lat: 41.6319113, lng: 48.6847836 },
      info: t("project.xudat.name"),
      locate: t("project.xudat.location"),
      customer: t("project.xudat.client"),
      images: [
        "./images/projects/Xudat/xudat(1).webp",
        "./images/projects/Xudat/xudat(2).webp",
        "./images/projects/Xudat/xudat(3).webp",
        "./images/projects/Xudat/xudat(4).webp",
        "./images/projects/Xudat/xudat(5).webp",
        "./images/projects/Xudat/xudat(6).webp",
        "./images/projects/Xudat/xudat(7).webp",
      ],
      year: "2021-2022",
      class: "aze",
    },
    {
      id: 15,
      position: { lat: 40.5234371, lng: 49.6554125 },
      info: t("project.abseron.name"),
      locate: t("project.abseron.location"),
      customer: t("project.abseron.client"),
      images: [
        "./images/projects/Abseron/abseron(1).webp",
        "./images/projects/Abseron/abseron(2).webp",
        "./images/projects/Abseron/abseron(3).webp",
        "./images/projects/Abseron/abseron(4).webp",
        "./images/projects/Abseron/abseron(5).webp",
        "./images/projects/Abseron/abseron(6).webp",
        "./images/projects/Abseron/abseron(7).webp",
        "./images/projects/Abseron/abseron(8).webp",
      ],
      year: "2022-2024",
      class: "aze",
    },
    {
      id: 16,
      position: { lat: 40.7706621, lng: 47.0372156 },
      info: t("project.mingecevir.name"),
      locate: t("project.mingecevir.location"),
      customer: t("project.mingecevir.client"),
      images: [
        "./images/projects/Mingecevir/mingecevir(1).webp",
        "./images/projects/Mingecevir/mingecevir(2).webp",
        "./images/projects/Mingecevir/mingecevir(3).webp",
        "./images/projects/Mingecevir/mingecevir(4).webp",
      ],
      year: "2021-2026",
      class: "aze",
    },
    {
      id: 17,
      position: { lat: 41.1102692, lng: 45.3846943 },
      info: t("project.gedebey.name"),
      locate: t("project.gedebey.location"),
      customer: t("project.gedebey.client"),
      images: [
        "./images/projects/Mingecevir/gedebey(1).webp",
        "./images/projects/Mingecevir/gedebey(2).webp",
        "./images/projects/Mingecevir/gedebey(3).webp",
        "./images/projects/Mingecevir/gedebey(4).webp",
      ],
      year: "2019-2021",
      class: "aze",
    },
    {
      id: 171,
      position: { lat: 40.7706621, lng: 45.827611 },
      info: t("project.gedebey.name"),
      locate: t("project.gedebey.location"),
      customer: t("project.gedebey.client"),
      images: [
        "./images/projects/Mingecevir/gedebey(1).webp",
        "./images/projects/Mingecevir/gedebey(2).webp",
        "./images/projects/Mingecevir/gedebey(3).webp",
        "./images/projects/Mingecevir/gedebey(4).webp",
      ],
      year: "2019-2021",
      class: "aze",
    },
    {
      id: 172,
      position: { lat: 40.345996, lng: 46.963391 },
      info: t("project.gedebey.name"),
      locate: t("project.gedebey.location"),
      customer: t("project.gedebey.client"),
      images: [
        "./images/projects/Mingecevir/gedebey(1).webp",
        "./images/projects/Mingecevir/gedebey(2).webp",
        "./images/projects/Mingecevir/gedebey(3).webp",
        "./images/projects/Mingecevir/gedebey(4).webp",
      ],
      year: "2019-2021",
      class: "aze",
    },
    {
      id: 18,
      position: { lat: 40.3754152, lng: 49.9430019 },
      info: t("project.bravo.name"),
      locate: t("project.bravo.location"),
      customer: t("project.bravo.client"),
      images: [
        "./images/projects/Bravo/bravo(1).webp",
        "./images/projects/Bravo/bravo(2).webp",
        "./images/projects/Bravo/bravo(3).webp",
        "./images/projects/Bravo/bravo(4).webp",
        "./images/projects/Bravo/bravo(5).webp",
      ],
      year: "2015-2017",
      class: "aze",
    },
    {
      id: 19,
      position: { lat: 40.3779964, lng: 49.8628035 },
      info: t("project.portgarden.name"),
      locate: t("project.portgarden.location"),
      customer: t("project.portgarden.client"),
      images: [
        "./images/projects/Portgarden/portgarden(1).webp",
        "./images/projects/Portgarden/portgarden(2).webp",
        "./images/projects/Portgarden/portgarden(3).webp",
        "./images/projects/Portgarden/portgarden(4).webp",
        "./images/projects/Portgarden/portgarden(5).webp",
        "./images/projects/Portgarden/portgarden(6).webp",
      ],
      year: "2022-2023",
      class: "aze",
    },
    {
      id: 20,
      position: { lat: 40.3580491, lng: 49.837306 },
      info: t("project.denizmall.name"),
      locate: t("project.denizmall.location"),
      customer: t("project.denizmall.client"),
      images: [
        "./images/projects/Denizmall/denizmall(1).webp",
        "./images/projects/Denizmall/denizmall(2).webp",
        "./images/projects/Denizmall/denizmall(3).webp",
        "./images/projects/Denizmall/denizmall(4).webp",
        "./images/projects/Denizmall/denizmall(5).webp",
      ],
      year: "2022-2023",
      class: "aze",
    },
  ]);
  
  useEffect(() => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => ({
        ...marker,
        info: t("project.zabux.name"),
        customer: t("project.zabux.client"),
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
    localStorage.setItem("language", lng); // Dil tercihini localStorage'e kaydet
    setActiveLanguage(lng);
  };

  useEffect(() => {
    // Dil değiştikçe aktif dil düğmesinin arka plan rengini güncelle
    const languageButtons = document.querySelectorAll(
      ".language_change button"
    );

    languageButtons.forEach((button) => {
      const buttonLanguage = button.getAttribute("data-language");

      if (buttonLanguage === activeLanguage) {
        button.style.backgroundColor = "#68A99B";
      } else {
        button.style.backgroundColor = ""; // Diğer düğmeleri varsayılan renge geri getirin
      }
    });
  }, [activeLanguage]);

  return (
    <>
      <div className="language_change">
        <button data-language="en" onClick={() => changeLanguage("en")}>
          EN
        </button>
        <button data-language="ru" onClick={() => changeLanguage("ru")}>
          RU
        </button>
        <button data-language="az" onClick={() => changeLanguage("az")}>
          AZ
        </button>
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
