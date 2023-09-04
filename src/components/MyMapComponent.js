import React from 'react';
import { GoogleMap, Circle, LoadScript,Marker } from '@react-google-maps/api';

const citymap = {
  saintNazaire: {
    center: { lat: 47.2758, lng: -2.2137 },
  },
};


const containerStyle = {
  width: '100%',
  maxWidth:'350px',
  height: '250px',
};

const center = {
  lat: 47.2758,
  lng: -2.2137
};

const MyMapComponent = () => {
  return (
    
    <LoadScript
      googleMapsApiKey="AIzaSyC-PYXRuCwxqlV5OW-hUNn4qwFAf_NEcn0"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
        mapTypeId={"terrain"}
      >
        {Object.keys(citymap).map(city => (
          <Circle 
            key={city}
            center={citymap[city].center} 
            radius={22000} 
            options={{ 
              strokeColor: "#C0C0C0",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#EFB49A",
              fillOpacity: 0.35,
            }}
          />
        ))}

        {/* Ajouter un marqueur à l'emplacement spécifié */}
        
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyMapComponent);