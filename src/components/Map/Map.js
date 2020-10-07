import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px"
};

const location = {
  lat: 23.45598,
  lng: 91.181931
};

const onLoad = marker => {
    console.log('marker:', marker);
}

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCS5tJUJmamrF6Vr2MUN8zymuAv11_VXF0">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={18}>
        <Marker
          onLoad={onLoad}
          position={location}
        />

        
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
