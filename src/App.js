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
      info: t("project.1.name"),
      locate: t("project.1.location"),
      customer: t("project.1.client"),
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
      info: t("project.2.name"),
      locate: t("project.2.location"),
      customer: t("project.2.client"),
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
      info: t("project.3.name"),
      locate: t("project.3.location"),
      customer: t("project.3.client"),
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
      info: t("project.4.name"),
      locate: t("project.4.location"),
      customer: t("project.4.client"),
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
      id: 4,
      position: { lat: 39.986812, lng: 45.797001 },
      info: t("project.4.name"),
      locate: t("project.4.location"),
      customer: t("project.4.client"),
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
      id: 4,
      position: { lat: 40.232287, lng: 46.169059 },
      info: t("project.4.name"),
      locate: t("project.4.location"),
      customer: t("project.4.client"),
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
      info: t("project.5.name"),
      locate: t("project.5.location"),
      customer: t("project.5.client"),
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
      info: t("project.6.name"),
      locate: t("project.6.location"),
      customer: t("project.6.client"),
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
      position: { lat: 39.4943566, lng: 48.9167375 },
      info: t("project.7.name"),
      locate: t("project.7.location"),
      customer: t("project.7.client"),
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
      info: t("project.8.name"),
      locate: t("project.8.location"),
      customer: t("project.8.client"),
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
      info: t("project.9.name"),
      locate: t("project.9.location"),
      customer: t("project.9.client"),
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
      info: t("project.10.name"),
      locate: t("project.10.location"),
      customer: t("project.10.client"),
      images: [
        "./images/projects/10/ritz(1).webp",
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
      info: t("project.11.name"),
      locate: t("project.11.location"),
      customer: t("project.11.client"),
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
      info: t("project.12.name"),
      locate: t("project.12.location"),
      customer: t("project.12.client"),
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
      info: t("project.13.name"),
      locate: t("project.13.location"),
      customer: t("project.13.client"),
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
      info: t("project.14.name"),
      locate: t("project.14.location"),
      customer: t("project.14.client"),
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
      info: t("project.15.name"),
      locate: t("project.15.location"),
      customer: t("project.15.client"),
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
      info: t("project.16.name"),
      locate: t("project.16.location"),
      customer: t("project.16.client"),
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
      info: t("project.17.name"),
      locate: t("project.17.location"),
      customer: t("project.17.client"),
      images: [
        "./images/projects/Gedebey/gedebey(1).webp",
        "./images/projects/Gedebey/gedebey(2).webp",
        "./images/projects/Gedebey/gedebey(3).webp",
        "./images/projects/Gedebey/gedebey(4).webp",
        "./images/projects/Gedebey/gedebey(5).webp",
        "./images/projects/Gedebey/gedebey(6).webp",
        "./images/projects/Gedebey/gedebey(7).webp",
        "./images/projects/Gedebey/gedebey(8).webp",
        "./images/projects/Gedebey/gedebey(9).webp",
        "./images/projects/Gedebey/gedebey(10).webp",
        "./images/projects/Gedebey/gedebey(11).webp",
        "./images/projects/Gedebey/gedebey(12).webp",
        "./images/projects/Gedebey/gedebey(13).webp",
        "./images/projects/Gedebey/gedebey(14).webp",
        "./images/projects/Gedebey/gedebey(15).webp",
      ],
      year: "2019-2021",
      class: "aze",
    },
    {
      id: 17,
      position: { lat: 40.7706621, lng: 45.827611 },
      info: t("project.17.name"),
      locate: t("project.17.location"),
      customer: t("project.17.client"),
      images: [
        "./images/projects/Gedebey/gedebey(1).webp",
        "./images/projects/Gedebey/gedebey(2).webp",
        "./images/projects/Gedebey/gedebey(3).webp",
        "./images/projects/Gedebey/gedebey(4).webp",
        "./images/projects/Gedebey/gedebey(5).webp",
        "./images/projects/Gedebey/gedebey(6).webp",
        "./images/projects/Gedebey/gedebey(7).webp",
        "./images/projects/Gedebey/gedebey(8).webp",
        "./images/projects/Gedebey/gedebey(9).webp",
        "./images/projects/Gedebey/gedebey(10).webp",
        "./images/projects/Gedebey/gedebey(11).webp",
        "./images/projects/Gedebey/gedebey(12).webp",
        "./images/projects/Gedebey/gedebey(13).webp",
        "./images/projects/Gedebey/gedebey(14).webp",
        "./images/projects/Gedebey/gedebey(15).webp",
      ],
      year: "2019-2021",
      class: "aze",
    },
    {
      id: 17,
      position: { lat: 40.345996, lng: 46.963391 },
      info: t("project.17.name"),
      locate: t("project.17.location"),
      customer: t("project.17.client"),
      images: [
        "./images/projects/Gedebey/gedebey(1).webp",
        "./images/projects/Gedebey/gedebey(2).webp",
        "./images/projects/Gedebey/gedebey(3).webp",
        "./images/projects/Gedebey/gedebey(4).webp",
        "./images/projects/Gedebey/gedebey(5).webp",
        "./images/projects/Gedebey/gedebey(6).webp",
        "./images/projects/Gedebey/gedebey(7).webp",
        "./images/projects/Gedebey/gedebey(8).webp",
        "./images/projects/Gedebey/gedebey(9).webp",
        "./images/projects/Gedebey/gedebey(10).webp",
        "./images/projects/Gedebey/gedebey(11).webp",
        "./images/projects/Gedebey/gedebey(12).webp",
        "./images/projects/Gedebey/gedebey(13).webp",
        "./images/projects/Gedebey/gedebey(14).webp",
        "./images/projects/Gedebey/gedebey(15).webp",
      ],
      year: "2019-2021",
      class: "aze",
    },
    {
      id: 18,
      position: { lat: 40.3754152, lng: 49.9430019 },
      info: t("project.18.name"),
      locate: t("project.18.location"),
      customer: t("project.18.client"),
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
      info: t("project.19.name"),
      locate: t("project.19.location"),
      customer: t("project.19.client"),
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
      info: t("project.20.name"),
      locate: t("project.20.location"),
      customer: t("project.20.client"),
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
    {
      id: 21,
      position: { lat: 40.3078447, lng: 49.7478902 },
      info: t("project.21.name"),
      locate: t("project.21.location"),
      customer: t("project.21.client"),
      images: [
        "./images/projects/Qaradag/qaradag(1).webp",
        "./images/projects/Qaradag/qaradag(2).webp",
        "./images/projects/Qaradag/qaradag(3).webp",
        "./images/projects/Qaradag/qaradag(4).webp",
        "./images/projects/Qaradag/qaradag(5).webp",
      ],
      year: "2015-2016",
      class: "aze",
    },
    {
      id: 22,
      position: { lat: 40.4181995, lng: 49.9136463 },
      info: t("project.22.name"),
      locate: t("project.22.location"),
      customer: t("project.22.client"),
      images: [
        "./images/projects/Bravokoroglu/bravokoroglu(1).webp",
        "./images/projects/Bravokoroglu/bravokoroglu(2).webp",
        "./images/projects/Bravokoroglu/bravokoroglu(3).webp",
        "./images/projects/Bravokoroglu/bravokoroglu(4).webp",
      ],
      year: "2018-2019",
      class: "aze",
    },
    {
      id: 23,
      position: { lat: 40.3764214, lng: 49.8637749 },
      info: t("project.23.name"),
      locate: t("project.23.location"),
      customer: t("project.23.client"),
      images: [
        "./images/projects/Portbaku_3/port_3(1).webp",
        "./images/projects/Portbaku_3/port_3(2).webp",
        "./images/projects/Portbaku_3/port_3(3).webp",
        "./images/projects/Portbaku_3/port_3(4).webp",
        "./images/projects/Portbaku_3/port_3(5).webp",
        "./images/projects/Portbaku_3/port_3(6).webp",
        "./images/projects/Portbaku_3/port_3(7).webp",
        "./images/projects/Portbaku_3/port_3(8).webp",
      ],
      year: "2019-2022",
      class: "aze",
    },
    {
      id: 24,
      position: { lat: 40.6006688, lng: 49.6126131 },
      info: t("project.24.name"),
      locate: t("project.24.location"),
      customer: t("project.24.client"),
      images: [
        "./images/projects/Sumqayit/sumqayit(1).webp",
        "./images/projects/Sumqayit/sumqayit(2).webp",
        "./images/projects/Sumqayit/sumqayit(3).webp",
        "./images/projects/Sumqayit/sumqayit(4).webp",
        "./images/projects/Sumqayit/sumqayit(5).webp",
      ],
      year: "2017-2018",
      class: "aze",
    },
    {
      id: 25,
      position: { lat: 42.4352568, lng: 18.5968619 },
      info: t("project.25.name"),
      locate: t("project.25.location"),
      customer: t("project.25.client"),
      images: [
        "./images/projects/Portonovi/portmonovi(1).webp",
        "./images/projects/Portonovi/portmonovi(2).webp",
        "./images/projects/Portonovi/portmonovi(3).webp",
        "./images/projects/Portonovi/portmonovi(4).webp",
        "./images/projects/Portonovi/portmonovi(5).webp",
        "./images/projects/Portonovi/portmonovi(6).webp",
        "./images/projects/Portonovi/portmonovi(7).webp",
        "./images/projects/Portonovi/portmonovi(8).webp",
      ],
      year: "2018-2020",
      class: "montenegro",
    },
    {
      id: 26,
      position: { lat: 40.3754167, lng: 49.8826138 },
      info: t("project.26.name"),
      locate: t("project.26.location"),
      customer: t("project.26.client"),
      images: [
        "./images/projects/Marriot/marriot(1).webp",
        "./images/projects/Marriot/marriot(2).webp",
        "./images/projects/Marriot/marriot(3).webp",
        "./images/projects/Marriot/marriot(4).webp",
        "./images/projects/Marriot/marriot(5).webp",
        "./images/projects/Marriot/marriot(6).webp",
        "./images/projects/Marriot/marriot(7).webp",
        "./images/projects/Marriot/marriot(8).webp",
      ],
      year: "2013-2015",
      class: "aze",
    },
    {
      id: 27,
      position: { lat: 40.3764556, lng: 49.8345924 },
      info: t("project.27.name"),
      locate: t("project.27.location"),
      customer: t("project.27.client"),
      images: [
        "./images/projects/Courtyard/courtyard(1).webp",
        "./images/projects/Courtyard/courtyard(2).webp",
        "./images/projects/Courtyard/courtyard(3).webp",
        "./images/projects/Courtyard/courtyard(4).webp",
        "./images/projects/Courtyard/courtyard(5).webp",
        "./images/projects/Courtyard/courtyard(6).webp",
        "./images/projects/Courtyard/courtyard(7).webp",
        "./images/projects/Courtyard/courtyard(8).webp",
        "./images/projects/Courtyard/courtyard(9).webp",
        "./images/projects/Courtyard/courtyard(10).webp",
        "./images/projects/Courtyard/courtyard(11).webp",
        "./images/projects/Courtyard/courtyard(12).webp",
      ],
      year: "2020-2021",
      class: "aze",
    },
    {
      id: 28,
      position: { lat: 40.3539419, lng: 49.8332131 },
      info: t("project.28.name"),
      locate: t("project.28.location"),
      customer: t("project.28.client"),
      images: [
        "./images/projects/Intourist/intourist(1).webp",
        "./images/projects/Intourist/intourist(2).webp",
        "./images/projects/Intourist/intourist(3).webp",
        "./images/projects/Intourist/intourist(4).webp",
        "./images/projects/Intourist/intourist(5).webp",
        "./images/projects/Intourist/intourist(6).webp",
        "./images/projects/Intourist/intourist(7).webp",
        "./images/projects/Intourist/intourist(8).webp",
        "./images/projects/Intourist/intourist(9).webp",
        "./images/projects/Intourist/intourist(10).webp",
        "./images/projects/Intourist/intourist(11).webp",
        "./images/projects/Intourist/intourist(12).webp",
        "./images/projects/Intourist/intourist(13).webp",
      ],
      year: "2013-2015",
      class: "aze",
    },
    {
      id: 29,
      position: { lat: 41.318179, lng: 48.135354 },
      info: t("project.29.name"),
      locate: t("project.29.location"),
      customer: t("project.29.client"),
      images: [
        "./images/projects/Qusar/qusar(1).webp",
        "./images/projects/Qusar/qusar(2).webp",
        "./images/projects/Qusar/qusar(3).webp",
        "./images/projects/Qusar/qusar(4).webp",
        "./images/projects/Qusar/qusar(5).webp",
      ],
      year: "2012-2014",
      class: "aze",
    },
    {
      id: 30,
      position: { lat: 40.3943146, lng: 49.7888688 },
      info: t("project.30.name"),
      locate: t("project.30.location"),
      customer: t("project.30.client"),
      images: [
        "./images/projects/Bravo20yanvar/bravo20yanvar(1).webp",
        "./images/projects/Bravo20yanvar/bravo20yanvar(2).webp",
        "./images/projects/Bravo20yanvar/bravo20yanvar(3).webp",
        "./images/projects/Bravo20yanvar/bravo20yanvar(4).webp",
        "./images/projects/Bravo20yanvar/bravo20yanvar(5).webp",
        "./images/projects/Bravo20yanvar/bravo20yanvar(6).webp",
        "./images/projects/Bravo20yanvar/bravo20yanvar(7).webp",
        "./images/projects/Bravo20yanvar/bravo20yanvar(8).webp",
        "./images/projects/Bravo20yanvar/bravo20yanvar(9).webp",
        "./images/projects/Bravo20yanvar/bravo20yanvar(10).webp",
      ],
      year: "2016-2017",
      class: "aze",
    },
    {
      id: 31,
      position: { lat: 40.4001309, lng: 49.8529446 },
      info: t("project.31.name"),
      locate: t("project.31.location"),
      customer: t("project.31.client"),
      images: [
        "./images/projects/Genclikmall/genclikmall(1).webp",
        "./images/projects/Genclikmall/genclikmall(2).webp",
        "./images/projects/Genclikmall/genclikmall(3).webp",
        "./images/projects/Genclikmall/genclikmall(4).webp",
        "./images/projects/Genclikmall/genclikmall(5).webp",
        "./images/projects/Genclikmall/genclikmall(6).webp",
      ],
      year: "2015-2016",
      class: "aze",
    },
    {
      id: 32,
      position: { lat: 40.151954, lng: 48.7689517 },
      info: t("project.32.name"),
      locate: t("project.32.location"),
      customer: t("project.32.client"),
      images: [
        "./images/projects/Haciqabul/haci(1).webp",
        "./images/projects/Haciqabul/haci(2).webp",
      ],
      year: "2019-2020",
      class: "aze",
    },
    {
      id: 33,
      position: { lat: 40.3790625, lng: 49.8467654 },
      info: t("project.33.name"),
      locate: t("project.33.location"),
      customer: t("project.33.client"),
      images: [
        "./images/projects/28mall/28mall(1).webp",
        "./images/projects/28mall/28mall(2).webp",
        "./images/projects/28mall/28mall(3).webp",
      ],
      year: "2012-2013",
      class: "aze",
    },
    {
      id: 34,
      position: { lat: 40.4275075, lng: 50.3534613 },
      info: t("project.34.name"),
      locate: t("project.34.location"),
      customer: t("project.34.client"),
      images: [
        "./images/projects/R-Pharm/r-pharm(1).webp",
        "./images/projects/R-Pharm/r-pharm(2).webp",
        "./images/projects/R-Pharm/r-pharm(3).webp",
        "./images/projects/R-Pharm/r-pharm(4).webp",
      ],
      year: "2018-2019",
      class: "aze",
    },
    {
      id: 35,
      position: { lat: 40.5884374, lng: 50.0580635 },
      info: t("project.35.name"),
      locate: t("project.35.location"),
      customer: t("project.35.client"),
      images: [
        "./images/projects/Amburan/amburan(1).webp",
        "./images/projects/Amburan/amburan(2).webp",
        "./images/projects/Amburan/amburan(3).webp",
        "./images/projects/Amburan/amburan(4).webp",
        "./images/projects/Amburan/amburan(5).webp",
        "./images/projects/Amburan/amburan(6).webp",
        "./images/projects/Amburan/amburan(7).webp",
        "./images/projects/Amburan/amburan(8).webp",
        "./images/projects/Amburan/amburan(9).webp",
      ],
      year: "2014-2015",
      class: "aze",
    },
    {
      id: 36,
      position: { lat: 40.9844953, lng: 45.5929071 },
      info: t("project.36.name"),
      locate: t("project.36.location"),
      customer: t("project.36.client"),
      images: [
        "./images/projects/Tovuz/tovuz(1).webp",
        "./images/projects/Tovuz/tovuz(2).webp",
        "./images/projects/Tovuz/tovuz(3).webp",
        "./images/projects/Tovuz/tovuz(4).webp",
        "./images/projects/Tovuz/tovuz(5).webp",
        "./images/projects/Tovuz/tovuz(6).webp",
        "./images/projects/Tovuz/tovuz(7).webp",
        "./images/projects/Tovuz/tovuz(8).webp",
        "./images/projects/Tovuz/tovuz(9).webp",
        "./images/projects/Tovuz/tovuz(10).webp",
      ],
      year: "2016-2017",
      class: "aze",
    },
    {
      id: 37,
      position: { lat: 41.3192786, lng: 48.1366446 },
      info: t("project.37.name"),
      locate: t("project.37.location"),
      customer: t("project.37.client"),
      images: [
        "./images/projects/Shahdag/shahdag(1).webp",
        "./images/projects/Shahdag/shahdag(2).webp",
        "./images/projects/Shahdag/shahdag(3).webp",
        "./images/projects/Shahdag/shahdag(4).webp",
      ],
      year: "2015-2016",
      class: "aze",
    },
    {
      id: 38,
      position: { lat: 40.3721637, lng: 49.8484035 },
      info: t("project.38.name"),
      locate: t("project.38.location"),
      customer: t("project.38.client"),
      images: [
        "./images/projects/Dinamo/dinamo(1).webp",
        "./images/projects/Dinamo/dinamo(2).webp",
        "./images/projects/Dinamo/dinamo(3).webp",
        "./images/projects/Dinamo/dinamo(4).webp",
        "./images/projects/Dinamo/dinamo(5).webp",
        "./images/projects/Dinamo/dinamo(6).webp",
        "./images/projects/Dinamo/dinamo(7).webp",
        "./images/projects/Dinamo/dinamo(8).webp",
      ],
      year: "2015-2016",
      class: "aze",
    },
    {
      id: 39,
      position: { lat: 40.334365, lng: 49.8324886 },
      info: t("project.39.name"),
      locate: t("project.39.location"),
      customer: t("project.39.client"),
      images: [
        "./images/projects/Aquatic/aquatic(1).webp",
        "./images/projects/Aquatic/aquatic(2).webp",
        "./images/projects/Aquatic/aquatic(3).webp",
        "./images/projects/Aquatic/aquatic(4).webp",
        "./images/projects/Aquatic/aquatic(5).webp",
        "./images/projects/Aquatic/aquatic(6).webp",
        "./images/projects/Aquatic/aquatic(7).webp",
        "./images/projects/Aquatic/aquatic(8).webp",
        "./images/projects/Aquatic/aquatic(9).webp",
      ],
      year: "2015-2016",
      class: "aze",
    },
    {
      id: 40,
      position: { lat: 41.404714, lng: 46.87174 },
      info: t("project.40.name"),
      locate: t("project.40.location"),
      customer: t("project.40.client"),
      images: [
        "./images/projects/qax/qax(1).webp",
        "./images/projects/qax/qax(2).webp",
        "./images/projects/qax/qax(3).webp",
      ],
      year: "2021-2024",
      class: "aze",
    },
    {
      id: 41,
      position: { lat: 40.991371, lng: 45.596174 },
      info: t("project.41.name"),
      locate: t("project.41.location"),
      customer: t("project.41.client"),
      images: [
        "./images/projects/Tovuzyol/yol(1).webp",
        "./images/projects/Tovuzyol/yol(2).webp",
        "./images/projects/Tovuzyol/yol(3).webp",
        "./images/projects/Tovuzyol/yol(4).webp",
        "./images/projects/Tovuzyol/yol(5).webp",
      ],
      year: "2016-2017",
      class: "aze",
    },
    {
      id: 42,
      position: { lat: 40.3880867, lng: 49.874147 },
      info: t("project.42.name"),
      locate: t("project.42.location"),
      customer: t("project.42.client"),
      images: [
        "./images/projects/Volksvagen/volks(1).webp",
        "./images/projects/Volksvagen/volks(2).webp",
        "./images/projects/Volksvagen/volks(3).webp",
        "./images/projects/Volksvagen/volks(4).webp",
        "./images/projects/Volksvagen/volks(5).webp",
      ],
      year: "2020-2021",
      class: "aze",
    },
    {
      id: 43,
      position: { lat: 40.3759967, lng: 49.8608802 },
      info: t("project.43.name"),
      locate: t("project.43.location"),
      customer: t("project.43.client"),
      images: [
        "./images/projects/Atelier/atelier(1).webp",
        "./images/projects/Atelier/atelier(2).webp",
        "./images/projects/Atelier/atelier(3).webp",
        "./images/projects/Atelier/atelier(4).webp",
        "./images/projects/Atelier/atelier(5).webp",
        "./images/projects/Atelier/atelier(6).webp",
        "./images/projects/Atelier/atelier(7).webp",
        "./images/projects/Atelier/atelier(8).webp",
        "./images/projects/Atelier/atelier(9).webp",
      ],
      year: "",
      class: "aze",
    },
    {
      id: 44,
      position: { lat: 40.369016, lng: 49.8371155 },
      info: t("project.44.name"),
      locate: t("project.44.location"),
      customer: t("project.44.client"),
      images: [
        "./images/projects/Hard/hard(1).webp",
        "./images/projects/Hard/hard(2).webp",
        "./images/projects/Hard/hard(3).webp",
        "./images/projects/Hard/hard(4).webp",
        "./images/projects/Hard/hard(5).webp",
        "./images/projects/Hard/hard(6).webp",
      ],
      year: "2016-2017",
      class: "aze",
    },
    {
      id: 45,
      position: { lat: 40.351954, lng: 48.7698953 },
      info: t("project.45.name"),
      locate: t("project.45.location"),
      customer: t("project.45.client"),
      images: [
        "./images/projects/Nasos/naso(1).webp",
        "./images/projects/Nasos/naso(2).webp",
        "./images/projects/Nasos/naso(3).webp",
        "./images/projects/Nasos/naso(4).webp",
        "./images/projects/Nasos/naso(5).webp",
        "./images/projects/Nasos/naso(6).webp",
      ],
      year: "2017-2018",
      class: "aze",
    },
    {
      id: 46,
      position: { lat: 40.3790541, lng: 49.8406153 },
      info: t("project.46.name"),
      locate: t("project.46.location"),
      customer: t("project.46.client"),
      images: ["./images/projects/Bravosuper/bravo.webp"],
      year: "2017-2022",
      class: "aze",
    },
    {
      id: 47,
      position: { lat: 40.3790541, lng: 49.8406153 },
      info: t("project.mcdonald.name"),
      locate: t("project.mcdonald.location"),
      customer: t("project.mcdonald.client"),
      images: [
        "./images/projects/Mcdonald/mc(1).webp",
        "./images/projects/Mcdonald/mc(2).webp",
        "./images/projects/Mcdonald/mc(3).webp",
        "./images/projects/Mcdonald/mc(4).webp",
        "./images/projects/Mcdonald/mc(5).webp",
        "./images/projects/Mcdonald/mc(6).webp",
        "./images/projects/Mcdonald/mc(7).webp",
        "./images/projects/Mcdonald/mc(8).webp",
        "./images/projects/Mcdonald/mc(9).webp",
        "./images/projects/Mcdonald/mc(10).webp",
        "./images/projects/Mcdonald/mc(11).webp",
        "./images/projects/Mcdonald/mc(12).webp",
        "./images/projects/Mcdonald/mc(13).webp",
        "./images/projects/Mcdonald/mc(14).webp",
        "./images/projects/Mcdonald/mc(15).webp",
      ],
      year: "2011-2024",
      class: "aze",
    },
  ]);

  useEffect(() => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => ({
        ...marker,
        info: t(`project.${marker.id}.name`),
        locate: t(`project.${marker.id}.location`),
        customer: t(`project.${marker.id}.client`),
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
        height: 100, // Set the desired height
        width: 100, // Set the desired width
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
    localStorage.setItem("language", lng);
    setActiveLanguage(lng);
  };

  useEffect(() => {
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
          zoom={7}
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
                      scaledSize: new window.google.maps.Size(100, 100),
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
