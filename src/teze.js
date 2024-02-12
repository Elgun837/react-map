import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    loadModules(['esri/Map', 'esri/views/MapView', '@googlemaps/markerclusterer']).then(([Map, MapView, MarkerClusterer]) => {
      const map = new Map({
        basemap: 'topo-vector',
      });

      const view = new MapView({
        container: mapRef.current,
        map: map,
        zoom: 3,
        center: [150.863657, -34.671264],
      });

      const markers = [
        { lat: -34.671264, lng: 150.863657 },
        { lat: -35.304724, lng: 148.662905 },
        { lat: -36.817685, lng: 175.699196 },
        { lat: -36.828611, lng: 175.790222 },
        { lat: -37.75, lng: 145.116667 },
        { lat: -37.759859, lng: 145.128708 },
        { lat: -37.765015, lng: 145.133858 },
        { lat: -37.770104, lng: 145.143299 },
        { lat: -37.7737, lng: 145.145187 },
        { lat: -37.774785, lng: 145.137978 },
        { lat: -38.330766, lng: 144.695692 },
        { lat: -39.927193, lng: 175.053218 },
        { lat: -41.330162, lng: 174.865694 },
        { lat: -42.734358, lng: 147.439506 },
        { lat: -42.734358, lng: 147.501315 },
        { lat: -42.735258, lng: 147.438 },
        { lat: -43.999792, lng: 170.463352 },
      ];

      const markerElements = markers.map((marker) => {
        const markerDiv = document.createElement('div');
        markerDiv.className = 'marker';
        return {
          location: {
            x: marker.lng,
            y: marker.lat,
          },
          markerDiv,
        };
      });

      const markerCluster = new MarkerClusterer(map, markerElements, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
      });

      view.ui.add('zoom', 'top-right');
    });
  }, []);

  return <div ref={mapRef} className="map"></div>;
};

export default Map;