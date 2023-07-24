import React, { useEffect } from 'react';

const citymap = {
  chicago: {
    center: { lat: 41.878, lng: -87.629 },
    population: 2714856,
  },
  newyork: {
    center: { lat: 40.714, lng: -74.005 },
    population: 8405837,
  },
  losangeles: {
    center: { lat: 34.052, lng: -118.243 },
    population: 3857799,
  },
  vancouver: {
    center: { lat: 49.25, lng: -123.1 },
    population: 603502,
  },
};

const MapComponent = () => {
  useEffect(() => {
    // Load the Google Maps API script asynchronously.
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-PYXRuCwxqlV5OW-hUNn4qwFAf_NEcn0&callback=initMap&v=3`;
    script.defer = true;
    document.head.appendChild(script);

    // This function will be called after the script is loaded.
    window.initMap = initMap;

    return () => {
      // Clean up to avoid memory leaks.
      document.head.removeChild(script);
      window.initMap = undefined;
    };
  }, []);

  const initMap = () => {
    // Create the map.
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: { lat: 37.09, lng: -95.712 },
      mapTypeId: 'terrain',
    });

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (const city in citymap) {
      // Add the circle for this city to the map.
      const cityCircle = new window.google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].population) * 100,
      });
    }
  };

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default MapComponent;