// GoogleMap.js
/*"AIzaSyC-PYXRuCwxqlV5OW-hUNn4qwFAf_NEcn0"*/

import React from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px'
};

const center = {
  lat: 47.3072,
  lng: -2.3148
};

const radiusOptions = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.9,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.9,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 1000
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC-PYXRuCwxqlV5OW-hUNn4qwFAf_NEcn0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Circle center={center} options={radiusOptions} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;

