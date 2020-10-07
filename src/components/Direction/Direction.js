import React, { useState } from "react";
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const location = {
  lat: 23.733348,
  lng: 90.406707
};

// const location = {
//   lat: 23.45598,
//   lng: 91.181931,
// };

function Direction({origin, destination}) {
    const [directionResponse, setDirectionResponse] = useState(null);
  return (
    <LoadScript googleMapsApiKey="AIzaSyCS5tJUJmamrF6Vr2MUN8zymuAv11_VXF0">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={18}>
        
        {
            origin !== '' && destination !== '' && <DirectionsService
          // required
          options={{
            destination: destination,
            origin: origin,
            travelMode: "DRIVING",
          }}
          // required
          callback={(res) => {
            if (res !== null) {
              setDirectionResponse(res);
            }
          }}
        />
        }

        {
            directionResponse && <DirectionsRenderer
            // required
            options={{
              directions: directionResponse,
            }}
          />
        }
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Direction);
