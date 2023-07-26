import React from 'react';
import { GoogleMap, Circle, LoadScript } from '@react-google-maps/api';

const citymap = {
  saintNazaire: {
    center: { lat: 47.2758, lng: -2.2137 },
  },
};

const containerStyle = {
  width: '350px',
  height: '250px'
};

const center = {
  lat: 47.2758, lng: -2.2137
};

const MyMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC-PYXRuCwxqlV5OW-hUNn4qwFAf_NEcn0"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        mapTypeId={"terrain"}
      >
        {Object.keys(citymap).map(city => (
          <Circle 
            key={city}
            center={citymap[city].center} 
            radius={20000} 
            options={{ 
              strokeColor: "#D9D9D9",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#EFB49A",
              fillOpacity: 0.35,
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyMapComponent);