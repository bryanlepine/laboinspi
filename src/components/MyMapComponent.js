import React from 'react';
import { GoogleMap, Circle, LoadScript } from '@react-google-maps/api';

const citymap = {
  saintNazaire: {
    center: { lat: 47.2758, lng: -2.2137 },
  },
};

const containerStyle = {
  width: '600px',
  height: '400px'
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
            radius={10000} 
            options={{ 
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#FF0000",
              fillOpacity: 0.35,
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyMapComponent);