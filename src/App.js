import React,{useState} from 'react';
import { GoogleMap, LoadScript,Marker, InfoWindow} from '@react-google-maps/api';
import { MarkerClusterer } from '@react-google-maps/api';

const  App = () => {
  const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
  };

  const center = {
    lat: 40, // Başlangıç konumu latitudinal koordinatı
    lng: 40, // Başlangıç konumu longitudinal koordinatı
  };
  const [markers, setMarkers] = useState([
    { id: 1, position: { lat: 40, lng: 40 }, color: 'red', info: 'Marker 1 Info' },
    { id: 2, position: { lat: 41, lng: 41 }, color: 'blue', info: 'Marker 2 Info' },
    { id: 3, position: { lat: 40, lng: 40 }, color: 'red', info: 'Marker 1 Info' },
    { id: 4, position: { lat: 41.00123, lng: 41 }, color: 'blue', info: 'Marker 2 Info' },
    { id: 5, position: { lat: 40, lng: 40 }, color: 'red', info: 'Marker 1 Info' },
    { id: 6, position: { lat: 41, lng: 41 }, color: 'blue', info: 'Marker 2 Info' },
    { id: 7, position: { lat: 40, lng: 40 }, color: 'red', info: 'Marker 1 Info' },
    { id: 8, position: { lat: 41, lng: 41 }, color: 'blue', info: 'Marker 2 Info' },
    // Diğer marker'lar...
  ]);

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDX0fzqyL0YVHbo5-3cMB6u4DnSS1sYCpc"
    >

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5}
        mapTypeId="satellite"
      >
         <MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={60}

        >
          {(clusterer) => (
            <>
            
              {markers.map((marker) => (
                <Marker
                  key={marker.id}
                  position={marker.position}
                  icon={{
                    url: `./icon.svg`,
                    scaledSize: new window.google.maps.Size(40, 40),
                  }}
                  onClick={() => handleMarkerClick(marker)}
                  clusterer={clusterer}
                />
                
              ))}
        
              {selectedMarker && (
                <InfoWindow 
                  position={selectedMarker.position}
                  onCloseClick={handleInfoWindowClose}
                >
                  
                  <div style={{ background: selectedMarker.color, padding: '10px' }}>
                    <h2>{selectedMarker.info}</h2>
                    {/* Ek bilgileri buraya ekleyebilirsiniz */}
                    test
                  </div>
                </InfoWindow>
              )}
            </>
          )}
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  );

  // return (
  //   <LoadScript
  //     googleMapsApiKey="AIzaSyDX0fzqyL0YVHbo5-3cMB6u4DnSS1sYCpc"
      
  //   >
  //     <GoogleMap
  //       mapContainerStyle={mapContainerStyle}
  //       center={center}
  //       zoom={3} // İstediğiniz varsayılan zoom seviyesi
  //       mapTypeId="satellite" // Uydu görüntüsü
  //     />
  //   </LoadScript>
  // );
};

export default App