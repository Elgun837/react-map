import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MarkerClusterer } from "@react-google-maps/api";
import "./App.css";
import Overlay from "./Overlay";
import Overlay2 from "./Overlay2";
import Modal from "./Modal";
import ButtonModal from "./ButtonModal";
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
      position: { lat: 39.35541812603985, lng: 46.68115583115065 },
      info: t("project.1.name"),
      locate: t("project.1.location"),
      customer: t("project.1.client"),
      images: [
        "./images/projects/zabux/zabux(1).webp",
        "./images/projects/zabux/zabux(2).webp",
        "./images/projects/zabux/zabux(3).webp",
        "./images/projects/zabux/zabux(4).webp",
        "./images/projects/zabux/zabux(5).webp",
      ],
      year: "2022-2023",
      class: "aze",
      scope: t("project.1.scope"),
    },
    {
      id: 2,
      position: { lat: 43.79250876486757, lng: 57.78046449572585 },
      info: t("project.2.name"),
      locate: t("project.2.location"),
      customer: t("project.2.client"),
      images: [
        "./images/projects/uzbekistan/uzbek(1).webp",
        "./images/projects/uzbekistan/uzbek(2).webp",
        "./images/projects/uzbekistan/uzbek(3).webp",
        "./images/projects/uzbekistan/uzbek(4).webp",
        "./images/projects/uzbekistan/uzbek(5).webp",
        "./images/projects/uzbekistan/uzbek(6).webp",
      ],
      year: "2021-2024",
      class: "uzb",
      scope: t("project.2.scope"),
    },
    {
      id: 3,
      position: { lat: 39.61428877292762, lng: 47.15580781011356 },
      info: t("project.3.name"),
      locate: t("project.3.location"),
      customer: t("project.3.client"),
      images: [
        "./images/projects/agdam/agdam(1).webp",
        "./images/projects/agdam/agdam(2).webp",
        "./images/projects/agdam/agdam(3).webp",
        "./images/projects/agdam/agdam(4).webp",
      ],
      year: "2022-2025",
      class: "aze",
      scope: t("project.3.scope"),
    },
    {
      id: 4,
      position: { lat: 39.6411691963279, lng: 46.541586037953714 },
      info: t("project.4.name"),
      locate: t("project.4.location"),
      customer: t("project.4.client"),
      images: [
        "./images/projects/lacin/1.webp",
        "./images/projects/lacin/2.webp",
        "./images/projects/lacin/3.webp",
        "./images/projects/lacin/4.webp",
        "./images/projects/lacin/5.webp",
        "./images/projects/lacin/6.webp",
        "./images/projects/lacin/7.webp",
        "./images/projects/lacin/8.webp",
      ],
      year: "2021-2025",
      class: "aze",
      scope: t("project.4.scope"),
    },
    {
      id: 442,
      position: { lat: 39.98670513514073, lng: 45.79701172538381 },
      info: t("project.4.name"),
      locate: t("project.4.location"),
      customer: t("project.4.client"),
      images: [
        "./images/projects/kelbecer/1.webp",
        "./images/projects/kelbecer/2.webp",
        "./images/projects/kelbecer/3.webp",
        "./images/projects/kelbecer/4.webp",
        "./images/projects/kelbecer/5.webp",
        "./images/projects/kelbecer/6.webp",
        "./images/projects/kelbecer/7.webp",
      ],
      year: "2021-2025",
      class: "aze",
      scope: t("project.4.scope3"),
    },
    {
      id: 443,
      position: { lat: 40.23230747582256, lng: 46.16905230163727 },
      info: t("project.4.name"),
      locate: t("project.4.location"),
      customer: t("project.4.client"),
      images: [
        "./images/projects/daskesen/1.webp",
        "./images/projects/daskesen/2.webp",
        "./images/projects/daskesen/3.webp",
        "./images/projects/daskesen/4.webp",
      ],
      year: "2021-2025",
      class: "aze",
      scope: t("project.4.scope3"),
    },
    {
      id: 5,
      position: { lat: 39.59900787155956, lng: 47.1517612168928 },
      info: t("project.5.name"),
      locate: t("project.5.location"),
      customer: t("project.5.client"),
      images: [
        "./images/projects/fuzuli/fuzuli(1).webp",
        "./images/projects/fuzuli/fuzuli(2).webp",
        "./images/projects/fuzuli/fuzuli(3).webp",
        "./images/projects/fuzuli/fuzuli(4).webp",
        "./images/projects/fuzuli/fuzuli(5).webp",
      ],
      year: "2023-2025",
      class: "aze",
      scope: t("project.5.scope"),
    },
    {
      id: 6,
      position: { lat: 29.4146, lng: 47.6581818 },
      info: t("project.6.name"),
      locate: t("project.6.location"),
      customer: t("project.6.client"),
      images: [
        "./images/projects/mutlaa/mutlaa(1).webp",
        "./images/projects/mutlaa/mutlaa(2).webp",
        "./images/projects/mutlaa/mutlaa(3).webp",
        "./images/projects/mutlaa/mutlaa(4).webp",
      ],
      year: "2019-2021",
      class: "kuveyt",
      scope: t("project.6.scope"),
    },
    {
      id: 7,
      position: { lat: 39.4943566, lng: 48.9167375 },
      info: t("project.7.name"),
      locate: t("project.7.location"),
      customer: t("project.7.client"),
      images: [
        "./images/projects/alat/alat(1).webp",
        "./images/projects/alat/alat(2).webp",
        "./images/projects/alat/alat(3).webp",
        "./images/projects/alat/alat(4).webp",
      ],
      year: "2022-2025",
      class: "aze",
      scope: t("project.7.scope"),
    },
    {
      id: 8,
      position: { lat: 40.37898598659498, lng: 49.89259235092345 },
      info: t("project.8.name"),
      locate: t("project.8.location"),
      customer: t("project.8.client"),
      images: [
        "./images/projects/knigtsbridge/knigts(1).webp",
        "./images/projects/knigtsbridge/knigts(2).webp",
        "./images/projects/knigtsbridge/knigts(3).webp",
        "./images/projects/knigtsbridge/knigts(4).webp",
      ],
      year: "2016-2020",
      class: "aze",
      scope: t("project.8.scope"),
    },
    {
      id: 9,
      position: { lat: 40.67714695742388, lng: 46.35947955276103 },
      info: t("project.9.name"),
      locate: t("project.9.location"),
      customer: t("project.9.client"),
      images: [
        "./images/projects/gancamall/gancamall(1).webp",
        "./images/projects/gancamall/gancamall(2).webp",
        "./images/projects/gancamall/gancamall(3).webp",
        "./images/projects/gancamall/gancamall(4).webp",
      ],
      year: "2014-2017",
      class: "aze",
      scope: t("project.9.scope"),
    },
    {
      id: 10,
      position: { lat: 40.389036338349406, lng: 49.864862364001084 },
      info: t("project.10.name"),
      locate: t("project.10.location"),
      customer: t("project.10.client"),
      images: [
        "./images/projects/ritz/ritz(1).webp",
        "./images/projects/ritz/ritz(2).webp",
        "./images/projects/ritz/ritz(3).webp",
        "./images/projects/ritz/ritz(4).webp",
        "./images/projects/ritz/ritz(5).webp",
        "./images/projects/ritz/ritz(6).webp",
      ],
      year: "2018-2022",
      class: "aze",
      scope: t("project.10.scope"),
    },
    {
      id: 11,
      position: { lat: 40.376470414365556, lng: 49.860023064417646 },
      info: t("project.11.name"),
      locate: t("project.11.location"),
      customer: t("project.11.client"),
      images: [
        "./images/projects/portbaku/portbaku(1).webp",
        "./images/projects/portbaku/portbaku(2).webp",
        "./images/projects/portbaku/portbaku(3).webp",
        "./images/projects/portbaku/portbaku(4).webp",
        "./images/projects/portbaku/portbaku(5).webp",
        "./images/projects/portbaku/portbaku(6).webp",
      ],
      year: "2011-2015",
      class: "aze",
      scope: t("project.11.scope"),
    },
    {
      id: 12,
      position: { lat: 39.558785632940626, lng: 48.95781749091479 },
      info: t("project.12.name"),
      locate: t("project.12.location"),
      customer: t("project.12.client"),
      images: [
        "./images/projects/salyan/salyan(1).webp",
        "./images/projects/salyan/salyan(2).webp",
        "./images/projects/salyan/salyan(3).webp",
      ],
      year: "2021-2026",
      class: "aze",
      scope: t("project.12.scope"),
    },
    // {
    //   id: 13,
    //   position: { lat: 40.37556931371039, lng: 49.86176592024127 },
    //   info: t("project.13.name"),
    //   locate: t("project.13.location"),
    //   customer: t("project.13.client"),
    //   images: [
    //     "./images/projects/Portbaku_2/portbaku_2(1).webp",
    //     "./images/projects/Portbaku_2/portbaku_2(2).webp",
    //     "./images/projects/Portbaku_2/portbaku_2(3).webp",
    //     "./images/projects/Portbaku_2/portbaku_2(4).webp",
    //   ],
    //   year: "2012-2014",
    //   class: "aze",
    //   scope: t("project.13.scope"),
    // },
    {
      id: 14,
      position: { lat: 41.63259893027135, lng: 48.68695888045524 },
      info: t("project.14.name"),
      locate: t("project.14.location"),
      customer: t("project.14.client"),
      images: [
        "./images/projects/xudat/xudat(1).webp",
        "./images/projects/xudat/xudat(2).webp",
        "./images/projects/xudat/xudat(3).webp",
        "./images/projects/xudat/xudat(4).webp",
        "./images/projects/xudat/xudat(5).webp",
        "./images/projects/xudat/xudat(6).webp",
      ],
      year: "2021-2022",
      class: "aze",
      scope: t("project.14.scope"),
    },
    {
      id: 15,
      position: { lat: 40.48953672721525, lng: 49.89136050462344 },
      info: t("project.15.name"),
      locate: t("project.15.location"),
      customer: t("project.15.client"),
      images: [
        "./images/projects/abseron/abseron(1).webp",
        "./images/projects/abseron/abseron(2).webp",
        "./images/projects/abseron/abseron(3).webp",
        "./images/projects/abseron/abseron(4).webp",
        "./images/projects/abseron/abseron(5).webp",
        "./images/projects/abseron/abseron(6).webp",
        "./images/projects/abseron/abseron(7).webp",
        "./images/projects/abseron/abseron(8).webp",
      ],
      year: "2022-2025",
      class: "aze",
      scope: t("project.15.scope"),
    },
    {
      id: 16,
      position: { lat: 40.7706621, lng: 47.0372156 },
      info: t("project.16.name"),
      locate: t("project.16.location"),
      customer: t("project.16.client"),
      images: [
        "./images/projects/mingecevir/1.webp",
        "./images/projects/mingecevir/2.webp",
        "./images/projects/mingecevir/3.webp",
        "./images/projects/mingecevir/4.webp",
        "./images/projects/mingecevir/5.webp",
        "./images/projects/mingecevir/6.webp",
        "./images/projects/mingecevir/7.webp",
      ],
      year: "2021-2026",
      class: "aze",
      scope: t("project.16.scope"),
    },
    {
      id: 17,
      position: { lat: 40.56970064779442, lng: 45.82760563628342 },
      info: t("project.17.name"),
      locate: t("project.17.location"),
      customer: t("project.17.client"),
      images: [
        "./images/projects/gedebey/gedebey(1).webp",
        "./images/projects/gedebey/gedebey(2).webp",
        "./images/projects/gedebey/gedebey(3).webp",
        "./images/projects/gedebey/gedebey(4).webp",
      ],
      year: "2019-2021",
      class: "aze",
      scope: t("project.17.scope"),
    },
    {
      id: 171,
      position: { lat: 40.34609412356789, lng: 46.963374906747084 },

      info: t("project.171.name"),
      locate: t("project.171.location"),
      customer: t("project.171.client"),
      images: [
        "./images/projects/terter/gedebey(1).webp",
        "./images/projects/terter/gedebey(2).webp",
        "./images/projects/terter/gedebey(4).webp",
        "./images/projects/terter/gedebey(5).webp",
        "./images/projects/terter/gedebey(6).webp",
        "./images/projects/terter/gedebey(7).webp",
        "./images/projects/terter/gedebey(8).webp",
        "./images/projects/terter/gedebey(9).webp",
        "./images/projects/terter/gedebey(10).webp",
        "./images/projects/terter/gedebey(11).webp",
        "./images/projects/terter/gedebey(12).webp",
        "./images/projects/terter/gedebey(13).webp",
      ],
      year: "2019-2021",
      class: "aze",
      scope: t("project.17.scope"),
    },
    {
      id: 172,
      position: { lat: 41.11178983518362, lng: 45.384452093252904 },
      info: t("project.172.name"),
      locate: t("project.172.location"),
      customer: t("project.172.client"),
      images: [
        "./images/projects/qazax/1.webp",
        "./images/projects/qazax/2.webp",
        "./images/projects/qazax/3.webp",
        "./images/projects/qazax/4.webp",
        "./images/projects/qazax/5.webp",
      ],
      year: "2019-2021",
      class: "aze",
      scope: t("project.17.scope"),
    },
    {
      id: 18,
      position: { lat: 40.375243558330524, lng: 49.94454148786151 },
      info: t("project.18.name"),
      locate: t("project.18.location"),
      customer: t("project.18.client"),
      images: [
        "./images/projects/bravo/bravo(1).webp",
        "./images/projects/bravo/bravo(2).webp",
        "./images/projects/bravo/bravo(3).webp",
        "./images/projects/bravo/bravo(4).webp",
        "./images/projects/bravo/bravo(5).webp",
      ],
      year: "2015-2017",
      class: "aze",
      scope: t("project.18.scope"),
    },
    {
      id: 19,
      position: { lat: 40.37797597309227, lng: 49.86323530678441 },
      info: t("project.19.name"),
      locate: t("project.19.location"),
      customer: t("project.19.client"),
      images: [
        "./images/projects/portgarden/portgarden(1).webp",
        "./images/projects/portgarden/portgarden(2).webp",
        "./images/projects/portgarden/portgarden(3).webp",
        "./images/projects/portgarden/portgarden(4).webp",
        "./images/projects/portgarden/portgarden(5).webp",
        "./images/projects/portgarden/portgarden(6).webp",
      ],
      year: "2022-2023",
      class: "aze",
      scope: t("project.19.scope"),
    },
    {
      id: 20,
      position: { lat: 40.3580491, lng: 49.837306 },
      info: t("project.20.name"),
      locate: t("project.20.location"),
      customer: t("project.20.client"),
      images: [
        "./images/projects/denizmall/denizmall(1).webp",
        "./images/projects/denizmall/denizmall(2).webp",
        "./images/projects/denizmall/denizmall(3).webp",
        "./images/projects/denizmall/denizmall(4).webp",
        "./images/projects/denizmall/denizmall(5).webp",
      ],
      year: "2016-2017",
      class: "aze",
      scope: t("project.20.scope"),
    },
    {
      id: 21,
      position: { lat: 40.30864649136873, lng: 49.75030418793617 },
      info: t("project.21.name"),
      locate: t("project.21.location"),
      customer: t("project.21.client"),
      images: [
        "./images/projects/qaradag/qaradag(1).webp",
        "./images/projects/qaradag/qaradag(2).webp",
        "./images/projects/qaradag/qaradag(3).webp",
        "./images/projects/qaradag/qaradag(4).webp",
      ],
      year: "2015-2016",
      class: "aze",
      scope: t("project.21.scope"),
    },
    {
      id: 22,
      position: { lat: 40.4181995, lng: 49.9136463 },
      info: t("project.22.name"),
      locate: t("project.22.location"),
      customer: t("project.22.client"),
      images: [
        "./images/projects/bravokoroglu/bravokoroglu(1).webp",
        "./images/projects/bravokoroglu/bravokoroglu(2).webp",
        "./images/projects/bravokoroglu/bravokoroglu(3).webp",
        "./images/projects/bravokoroglu/bravokoroglu(4).webp",
      ],
      year: "2018-2019",
      class: "aze",
      scope: t("project.22.scope"),
    },
    {
      id: 23,
      position: { lat: 40.3764214, lng: 49.8637749 },
      info: t("project.23.name"),
      locate: t("project.23.location"),
      customer: t("project.23.client"),
      images: [
        "./images/projects/portbaku_3/port_3(1).webp",
        "./images/projects/portbaku_3/port_3(2).webp",
        "./images/projects/portbaku_3/port_3(3).webp",
        "./images/projects/portbaku_3/port_3(4).webp",
        "./images/projects/portbaku_3/port_3(5).webp",
        "./images/projects/portbaku_3/port_3(6).webp",
        "./images/projects/portbaku_3/port_3(7).webp",
        "./images/projects/portbaku_3/port_3(8).webp",
      ],
      year: "2019-2022",
      class: "aze",
      scope: t("project.23.scope"),
    },
    {
      id: 24,
      position: { lat: 40.6006688, lng: 49.6126131 },
      info: t("project.24.name"),
      locate: t("project.24.location"),
      customer: t("project.24.client"),
      images: [
        "./images/projects/sumqayit/sumqayit(1).webp",
        "./images/projects/sumqayit/sumqayit(2).webp",
        "./images/projects/sumqayit/sumqayit(3).webp",
        "./images/projects/sumqayit/sumqayit(4).webp",
        "./images/projects/sumqayit/sumqayit(5).webp",
      ],
      year: "2017-2018",
      class: "aze",
      scope: t("project.24.scope"),
    },
    {
      id: 25,
      position: { lat: 42.43530035070587, lng: 18.596848488955906 },
      info: t("project.25.name"),
      locate: t("project.25.location"),
      customer: t("project.25.client"),
      images: [
        "./images/projects/portonovi/portmonovi(1).webp",
        "./images/projects/portonovi/portmonovi(2).webp",
        "./images/projects/portonovi/portmonovi(3).webp",
        "./images/projects/portonovi/portmonovi(4).webp",
        "./images/projects/portonovi/portmonovi(5).webp",
        "./images/projects/portonovi/portmonovi(6).webp",
        "./images/projects/portonovi/portmonovi(7).webp",
        "./images/projects/portonovi/portmonovi(8).webp",
      ],
      year: "2018-2020",
      class: "montenegro",
      scope: t("project.25.scope"),
    },
    {
      id: 26,
      position: { lat: 40.3754167, lng: 49.8826138 },
      info: t("project.26.name"),
      locate: t("project.26.location"),
      customer: t("project.26.client"),
      images: [
        "./images/projects/marriot/marriot(1).webp",
        "./images/projects/marriot/marriot(2).webp",
        "./images/projects/marriot/marriot(3).webp",
        "./images/projects/marriot/marriot(4).webp",
        "./images/projects/marriot/marriot(5).webp",
        "./images/projects/marriot/marriot(6).webp",
        "./images/projects/marriot/marriot(7).webp",
        "./images/projects/marriot/marriot(8).webp",
      ],
      year: "2013-2015",
      class: "aze",
      scope: t("project.26.scope"),
    },
    {
      id: 27,
      position: { lat: 40.3764556, lng: 49.8345924 },
      info: t("project.27.name"),
      locate: t("project.27.location"),
      customer: t("project.27.client"),
      images: [
        "./images/projects/courtyard/courtyard(1).webp",
        "./images/projects/courtyard/courtyard(2).webp",
        "./images/projects/courtyard/courtyard(3).webp",
        "./images/projects/courtyard/courtyard(4).webp",
        "./images/projects/courtyard/courtyard(5).webp",
        "./images/projects/courtyard/courtyard(6).webp",
        "./images/projects/courtyard/courtyard(7).webp",
        "./images/projects/courtyard/courtyard(8).webp",
        "./images/projects/courtyard/courtyard(9).webp",
        "./images/projects/courtyard/courtyard(10).webp",
        "./images/projects/courtyard/courtyard(11).webp",
        "./images/projects/courtyard/courtyard(12).webp",
      ],
      year: "2020-2021",
      class: "aze",
      scope: t("project.27.scope"),
    },
    {
      id: 28,
      position: { lat: 40.354050232031305, lng: 49.83365164126698 },
      info: t("project.28.name"),
      locate: t("project.28.location"),
      customer: t("project.28.client"),
      images: [
        "./images/projects/intourist/intourist(1).webp",
        "./images/projects/intourist/intourist(2).webp",
        "./images/projects/intourist/intourist(3).webp",
        "./images/projects/intourist/intourist(4).webp",
        "./images/projects/intourist/intourist(5).webp",
        "./images/projects/intourist/intourist(6).webp",
        "./images/projects/intourist/intourist(7).webp",
        "./images/projects/intourist/intourist(8).webp",
        "./images/projects/intourist/intourist(9).webp",
        "./images/projects/intourist/intourist(10).webp",
        "./images/projects/intourist/intourist(11).webp",
        "./images/projects/intourist/intourist(12).webp",
        "./images/projects/intourist/intourist(13).webp",
      ],
      year: "2013-2015",
      class: "aze",
      scope: t("project.28.scope"),
    },
    {
      id: 29,
      position: { lat: 41.318179, lng: 48.135354 },
      info: t("project.29.name"),
      locate: t("project.29.location"),
      customer: t("project.29.client"),
      images: [
        "./images/projects/qusar/qusar(1).webp",
        "./images/projects/qusar/qusar(2).webp",
        "./images/projects/qusar/qusar(3).webp",
        "./images/projects/qusar/qusar(4).webp",
        "./images/projects/qusar/qusar(5).webp",
      ],
      year: "2012-2014",
      class: "aze",
      scope: t("project.29.scope"),
    },
    {
      id: 30,
      position: { lat: 40.40159637756139, lng: 49.81081524480906 },
      info: t("project.30.name"),
      locate: t("project.30.location"),
      customer: t("project.30.client"),
      images: [
        "./images/projects/bravo20yanvar/bravo(1).webp",
        "./images/projects/bravo20yanvar/bravo(2).webp",
        "./images/projects/bravo20yanvar/bravo(3).webp",
        "./images/projects/bravo20yanvar/bravo(4).webp",
        "./images/projects/bravo20yanvar/bravo(5).webp",
        "./images/projects/bravo20yanvar/bravo(6).webp",
        "./images/projects/bravo20yanvar/bravo(7).webp",
        "./images/projects/bravo20yanvar/bravo(8).webp",
        "./images/projects/bravo20yanvar/bravo(9).webp",
        "./images/projects/bravo20yanvar/bravo(10).webp",
      ],
      year: "2016-2017",
      class: "aze",
      scope: t("project.30.scope"),
    },
    {
      id: 31,
      position: { lat: 40.4001309, lng: 49.8529446 },
      info: t("project.31.name"),
      locate: t("project.31.location"),
      customer: t("project.31.client"),
      images: [
        "./images/projects/ganclikmall/genclik(1).webp",
        "./images/projects/ganclikmall/genclik(2).webp",
        "./images/projects/ganclikmall/genclik(3).webp",
        "./images/projects/ganclikmall/genclik(4).webp",
        "./images/projects/ganclikmall/genclik(5).webp",
        "./images/projects/ganclikmall/genclik(6).webp",
      ],
      year: "2015-2016",
      class: "aze",
      scope: t("project.32.scope"),
    },
    {
      id: 32,
      position: { lat: 40.132357546533676, lng: 48.844474155824 },
      info: t("project.32.name"),
      locate: t("project.32.location"),
      customer: t("project.32.client"),
      images: [
        "./images/projects/haciqabul/haci(1).webp",
        "./images/projects/haciqabul/haci(2).webp",
      ],
      year: "2019-2020",
      class: "aze",
      scope: t("project.32.scope"),
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
      scope: t("project.33.scope"),
    },
    {
      id: 34,
      position: { lat: 40.4275075, lng: 50.3534613 },
      info: t("project.34.name"),
      locate: t("project.34.location"),
      customer: t("project.34.client"),
      images: [
        "./images/projects/r-pharm/r-pharm(1).webp",
        "./images/projects/r-pharm/r-pharm(2).webp",
        "./images/projects/r-pharm/r-pharm(3).webp",
        "./images/projects/r-pharm/r-pharm(4).webp",
      ],
      year: "2018-2019",
      class: "aze",
      scope: t("project.34.scope"),
    },
    {
      id: 35,
      position: { lat: 40.5884374, lng: 50.0580635 },
      info: t("project.35.name"),
      locate: t("project.35.location"),
      customer: t("project.35.client"),
      images: [
        "./images/projects/amburan/amburan(1).webp",
        "./images/projects/amburan/amburan(2).webp",
        "./images/projects/amburan/amburan(3).webp",
        "./images/projects/amburan/amburan(4).webp",
        "./images/projects/amburan/amburan(5).webp",
        "./images/projects/amburan/amburan(6).webp",
        "./images/projects/amburan/amburan(7).webp",
        "./images/projects/amburan/amburan(8).webp",
        "./images/projects/amburan/amburan(9).webp",
      ],
      year: "2014-2015",
      class: "aze",
      scope: t("project.35.scope"),
    },
    {
      id: 36,
      position: { lat: 40.9844953, lng: 45.5929071 },
      info: t("project.36.name"),
      locate: t("project.36.location"),
      customer: t("project.36.client"),
      images: [
        "./images/projects/tovuz/tovuz(1).webp",
        "./images/projects/tovuz/tovuz(2).webp",
        "./images/projects/tovuz/tovuz(3).webp",
        "./images/projects/tovuz/tovuz(4).webp",
      ],
      year: "2016-2017",
      class: "aze",
      scope: t("project.36.scope"),
    },
    // {
    //   id: 37,
    //   position: { lat: 41.3192786, lng: 48.1366446 },
    //   info: t("project.37.name"),
    //   locate: t("project.37.location"),
    //   customer: t("project.37.client"),
    //   images: [
    //     "./images/projects/shahdag/shahdag(1).webp",
    //     "./images/projects/shahdag/shahdag(2).webp",
    //     "./images/projects/shahdag/shahdag(3).webp",
    //     "./images/projects/shahdag/shahdag(4).webp",
    //   ],
    //   year: "2015-2016",
    //   class: "aze",
    //   scope: t("project.37.scope"),
    // },
    {
      id: 38,
      position: { lat: 40.3721637, lng: 49.8484035 },
      info: t("project.38.name"),
      locate: t("project.38.location"),
      customer: t("project.38.client"),
      images: [
        "./images/projects/dinamo/dinamo(1).webp",
        "./images/projects/dinamo/dinamo(2).webp",
        "./images/projects/dinamo/dinamo(3).webp",
        "./images/projects/dinamo/dinamo(4).webp",
        "./images/projects/dinamo/dinamo(5).webp",
        "./images/projects/dinamo/dinamo(6).webp",
        "./images/projects/dinamo/dinamo(7).webp",
        "./images/projects/dinamo/dinamo(8).webp",
      ],
      year: "2015-2016",
      class: "aze",
      scope: t("project.38.scope"),
    },
    {
      id: 39,
      position: { lat: 40.334365, lng: 49.8324886 },
      info: t("project.39.name"),
      locate: t("project.39.location"),
      customer: t("project.39.client"),
      images: [
        "./images/projects/aquatic/aquatic(1).webp",
        "./images/projects/aquatic/aquatic(2).webp",
        "./images/projects/aquatic/aquatic(3).webp",
        "./images/projects/aquatic/aquatic(4).webp",
        "./images/projects/aquatic/aquatic(5).webp",
        "./images/projects/aquatic/aquatic(6).webp",
        "./images/projects/aquatic/aquatic(7).webp",
        "./images/projects/aquatic/aquatic(8).webp",
        "./images/projects/aquatic/aquatic(9).webp",
      ],
      year: "2015-2016",
      class: "aze",
      scope: t("project.39.scope"),
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
        "./images/projects/qax/qax(4).webp",
        "./images/projects/qax/qax(5).webp",
      ],
      year: "2021-2024",
      class: "aze",
      scope: t("project.40.scope"),
    },
    // {
    //   id: 41,
    //   position: { lat: 40.991371, lng: 45.596174 },
    //   info: t("project.41.name"),
    //   locate: t("project.41.location"),
    //   customer: t("project.41.client"),
    //   images: [
    //     "./images/projects/Tovuzyol/yol(1).webp",
    //     "./images/projects/Tovuzyol/yol(2).webp",
    //     "./images/projects/Tovuzyol/yol(3).webp",
    //     "./images/projects/Tovuzyol/yol(4).webp",
    //     "./images/projects/Tovuzyol/yol(5).webp",
    //   ],
    //   year: "2016-2017",
    //   class: "aze",
    // },
    {
      id: 42,
      position: { lat: 40.38807712302191, lng: 49.875458363823775 },
      info: t("project.42.name"),
      locate: t("project.42.location"),
      customer: t("project.42.client"),
      images: [
        "./images/projects/volkswagen/volks(1).webp",
        "./images/projects/volkswagen/volks(2).webp",
        "./images/projects/volkswagen/volks(3).webp",
        "./images/projects/volkswagen/volks(4).webp",
        "./images/projects/volkswagen/volks(5).webp",
      ],
      year: "2020-2021",
      class: "aze",
      scope: t("project.42.scope"),
    },
    // {
    //   id: 43,
    //   position: { lat: 40.3758903018613, lng: 49.8612629221442 },
    //   info: t("project.43.name"),
    //   locate: t("project.43.location"),
    //   customer: t("project.43.client"),
    //   images: [
    //     "./images/projects/atelier/atelier(1).webp",
    //     "./images/projects/atelier/atelier(2).webp",
    //     "./images/projects/atelier/atelier(3).webp",
    //     "./images/projects/atelier/atelier(4).webp",
    //     "./images/projects/atelier/atelier(5).webp",
    //     "./images/projects/atelier/atelier(6).webp",
    //     "./images/projects/atelier/atelier(7).webp",
    //     "./images/projects/atelier/atelier(8).webp",
    //     "./images/projects/atelier/atelier(9).webp",
    //   ],
    //   year: "2011-2012",
    //   class: "aze",
    //   scope: t("project.43.scope"),
    // },
    {
      id: 44,
      position: { lat: 40.36907730623793, lng: 49.83735086390374 },
      info: t("project.44.name"),
      locate: t("project.44.location"),
      customer: t("project.44.client"),
      images: [
        "./images/projects/hard/hard(1).webp",
        "./images/projects/hard/hard(2).webp",
        "./images/projects/hard/hard(3).webp",
        "./images/projects/hard/hard(4).webp",
        "./images/projects/hard/hard(5).webp",
        "./images/projects/hard/hard(6).webp",
      ],
      year: "2016-2017",
      class: "aze",
      scope: t("project.44.scope"),
    },
    {
      id: 45,
      position: { lat: 40.156178137314846, lng: 48.84240532849617 },
      info: t("project.45.name"),
      locate: t("project.45.location"),
      customer: t("project.45.client"),
      images: [
        "./images/projects/nasos/naso(1).webp",
        "./images/projects/nasos/naso(2).webp",
        "./images/projects/nasos/naso(3).webp",
        "./images/projects/nasos/naso(4).webp",
        "./images/projects/nasos/naso(5).webp",
        "./images/projects/nasos/naso(6).webp",
      ],
      year: "2017-2018",
      class: "aze",
      scope: t("project.45.scope"),
    },

    {
      id: 48,
      position: { lat: 40.853556055684564, lng: 46.03143003927516 },
      info: t("project.48.name"),
      locate: t("project.48.location"),
      customer: t("project.48.client"),
      images: [
        "./images/projects/shamkir/1.jpg",
        "./images/projects/shamkir/2.jpg",
        "./images/projects/shamkir/3.jpg",
        "./images/projects/shamkir/4.jpg",
      ],
      year: "2020-2021",
      class: "aze",
      scope: t("project.47.scope"),
    },
    {
      id: 50,
      position: { lat: 40.78818689361591, lng:  47.16978345767039  },
      info: t("project.50.name"),
      locate: t("project.50.location"),
      customer: t("project.50.client"),
      images: [
        // "./images/projects/shamkir/1.jpg",
        // "./images/projects/shamkir/2.jpg",
        // "./images/projects/shamkir/3.jpg",
        // "./images/projects/shamkir/4.jpg",
      ],
      year: "2024-2027",
      class: "aze",
      scope: t("project.50.scope"),
    },
    {
      id: 501,
      position: { lat: 40.56495408271945, lng:  47.979397 },
      info: t("project.50.name"),
      locate: t("project.50.location"),
      customer: t("project.50.client"),
      images: [
        // "./images/projects/shamkir/1.jpg",
        // "./images/projects/shamkir/2.jpg",
        // "./images/projects/shamkir/3.jpg",
        // "./images/projects/shamkir/4.jpg",
      ],
      year: "2024-2027",
      class: "aze",
      scope: t("project.50.scope"),
    },
    {
      id: 502,
      position: { lat: 40.26153865058191,  lng: 48.7802454576704 },
      info: t("project.50.name"),
      locate: t("project.50.location"),
      customer: t("project.50.client"),
      images: [
        // "./images/projects/shamkir/1.jpg",
        // "./images/projects/shamkir/2.jpg",
        // "./images/projects/shamkir/3.jpg",
        // "./images/projects/shamkir/4.jpg",
      ],
      year: "2024-2027",
      class: "aze",
      scope: t("project.50.scope"),
    },
    {
      id: 51,
      position: { lat: 39.985538361709494,  lng: 46.879019132256765 },
      info: t("project.51.name"),
      locate: t("project.51.location"),
      customer: t("project.51.client"),
      images: [
        // "./images/projects/shamkir/1.jpg",
        // "./images/projects/shamkir/2.jpg",
        // "./images/projects/shamkir/3.jpg",
        // "./images/projects/shamkir/4.jpg",
      ],
      year: "2024-2025",
      class: "aze",
      scope: t("project.51.scope"),
    },
    {
      id: 52,
      position: { lat: 40.50372371772271,   lng: 49.60886600995731 },
      info: t("project.52.name"),
      locate: t("project.52.location"),
      customer: t("project.52.client"),
      images: [
        // "./images/projects/shamkir/1.jpg",
        // "./images/projects/shamkir/2.jpg",
        // "./images/projects/shamkir/3.jpg",
        // "./images/projects/shamkir/4.jpg",
      ],
      year: "2025-2027",
      class: "aze",
      scope: t("project.52.scope"),
    },
    {
      id: 53,
      position: { lat: 40.37878381802681,    lng: 50.01442642529192 },
      info: t("project.53.name"),
      locate: t("project.53.location"),
      customer: t("project.53.client"),
      images: [
        // "./images/projects/shamkir/1.jpg",
        // "./images/projects/shamkir/2.jpg",
        // "./images/projects/shamkir/3.jpg",
        // "./images/projects/shamkir/4.jpg",
      ],
      year: "2025-2027",
      class: "aze",
      scope: t("project.53.scope"),
    }
  ]);

  const [btns, setBtns] = useState([
    {
      id: 49,
      info: t("project.49.name"),
      btnName: t("project.49.btnName"),
      locate: t("project.49.location"),
      customer: t("project.49.client"),
      images: [
        "./images/projects/subart/1.webp",
        "./images/projects/subart/2.webp",
        "./images/projects/subart/3.webp",
        "./images/projects/subart/4.webp",
      ],
      year: "2021-2023",
      class: "aze",
      scope: t("project.49.scope"),
      logo: "./images/projects/subart/sub-logo.png",
    },
    {
      id: 46,

      info: t("project.46.name"),
      btnName: t("project.46.btnName"),
      locate: t("project.46.location"),
      customer: t("project.46.client"),
      images: [
        "./images/projects/bravosuper/bravo1.webp",
        "./images/projects/bravosuper/bravo2.webp",
        "./images/projects/bravosuper/bravo3.webp",
        "./images/projects/bravosuper/bravo4.webp",
        "./images/projects/bravosuper/bravo5.webp",
        "./images/projects/bravosuper/bravo6.webp",
        "./images/projects/bravosuper/bravo7.webp",
      ],
      year: "2017-2022",
      class: "aze",
      scope: t("project.46.scope"),
      logo: "./images/projects/Bravosuper/bravo-logo.png",
    },
    {
      id: 47,
      info: t("project.47.name"),
      btnName: t("project.47.btnName"),
      locate: t("project.47.location"),
      customer: t("project.47.client"),
      images: [
        "./images/projects/mcdonalds/mc(1).webp",
        "./images/projects/mcdonalds/mc(2).webp",
        "./images/projects/mcdonalds/mc(3).webp",
        "./images/projects/mcdonalds/mc(4).webp",
        "./images/projects/mcdonalds/mc(5).webp",
        "./images/projects/mcdonalds/mc(6).webp",
        "./images/projects/mcdonalds/mc(7).webp",
        "./images/projects/mcdonalds/mc(8).webp",
        "./images/projects/mcdonalds/mc(9).webp",
        "./images/projects/mcdonalds/mc(10).webp",
        "./images/projects/mcdonalds/mc(11).webp",
        "./images/projects/mcdonalds/mc(12).webp",
        "./images/projects/mcdonalds/mc(13).webp",
        "./images/projects/mcdonalds/mc(14).webp",
        "./images/projects/mcdonalds/mc(15).webp",
      ],
      year:
        activeLanguage === "en"
          ? "2011-present"
          : activeLanguage === "ru"
          ? "2011-настоящее время"
          : "2011-indiyədək",
      class: "aze",
      scope: t("project.47.scope"),
      logo: "./images/projects/Mcdonalds/mc-logo.png",
    },
  ]);
  useEffect(() => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) => ({
        ...marker,
        info: t(`project.${marker.id}.name`),
        locate: t(`project.${marker.id}.location`),
        customer: t(`project.${marker.id}.client`),
        scope: t(`project.${marker.id}.scope`),
        year:
          marker.id === 21
            ? activeLanguage === "en"
              ? `Phase I: 2015-2016. \n\n\n\n\nPhase II: 2019-2020`
              : activeLanguage === "ru"
              ? `Фаза I: 2015-2016 гг. \n\n\n\nФаза II: 2019-2020 гг.`
              : `1-ci mərhələ: 2015-2016. \n\n\n\n\n\n2-ci mərhələ: 2019-2020`
            : marker.year,
      }))
    );
  }, [t]);
  useEffect(() => {
    setBtns((prevBtns) =>
      prevBtns.map((btn) => ({
        ...btn,
        info: t(`project.${btn.id}.name`),
        btnName: t(`project.${btn.id}.btnName`),
        locate: t(`project.${btn.id}.location`),
        customer: t(`project.${btn.id}.client`),
        scope: t(`project.${btn.id}.scope`),
        year:
          btn.id === 47
            ? activeLanguage === "en"
              ? "2011-present"
              : activeLanguage === "ru"
              ? "2011-настоящее время"
              : "2011-indiyədək"
            : btn.year,
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
        url: "/images/holder.svg",
        height: window.innerWidth < 2000 ? 32 : 100,
        width: window.innerWidth < 2000 ? 32 : 100,
      },
    ],
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setOverlayVisible(true);
  };
  const handleButtonClick = (btn) => {
    setOverlay2Visible(true);
    setSelectedBtn(btn);
  };

  const handleOverlayClose = () => {
    setSelectedMarker(null);
    setOverlayVisible(false);
  };
  const handleOverlay2Close = () => {
    setSelectedBtn(null);
    setOverlay2Visible(false);
  };

  const defaultCenter = {
    lat: 38,
    lng: 45,
  };

  const [center, setCenter] = useState(defaultCenter);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [isOverlay2Visible, setOverlay2Visible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
        button.style.backgroundColor = "";
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

      <div className="btn_info">
        <div className="btn_info">
          {btns.map((button) => (
            <button key={button.id} onClick={() => handleButtonClick(button)}>
              <img src={button.logo} />
              {button.btnName}
            </button>
          ))}
        </div>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyAlPbyceaWa75wtjv7U4etyl0I-R2Tdmdw">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={window.innerWidth < 768 ? 3 : 5}
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
                      scaledSize: new window.google.maps.Size(
                        window.innerWidth < 2000 ? 40 : 124, // Set the desired height
                        window.innerWidth < 2000 ? 40 : 124 // Set the desired width
                      ),
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
                {isOverlay2Visible && (
                  <>
                    <Overlay2 onClose={handleOverlay2Close} />
                    <ButtonModal
                      ButtonInfo={selectedBtn}
                      onClose={handleOverlay2Close}
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
