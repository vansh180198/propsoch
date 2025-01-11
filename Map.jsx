import React, { useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }],
  },
];

const Map = ({latitude,longitude}) => {
  const center = { lat: latitude, lng: longitude };

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google?.maps?.marker?.AdvancedMarkerElement) {
        clearInterval(interval);

        // Initialize Advanced Marker
        const map = new window.google.maps.Map(
          document.getElementById("map"),
          {
            center: center,
            zoom: 10,
            styles: mapStyles,
            mapId: "112231b17b5baee7",
            gestureHandling: "cooperative",
            scrollwheel: false, // Disable scroll-based zooming
            // Replace with your Map ID
          }
        );

        new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: center,
          title: "Advanced Marker",
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDYdwTM8hp06RSuigxwedaeQVTDBd_rsOM"
      libraries={["marker"]} // Ensure "marker" library is loaded
    >
      <div id="map" style={containerStyle}></div>
    </LoadScript>
  );
};

export default Map;
