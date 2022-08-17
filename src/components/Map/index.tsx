import React from "react";
import GoogleMapReact from "google-map-react";
import { DataContext } from "../../contexts/DataContext";
import { mapStyles } from "../../constants";
import Marker from "../Marker";

export default function SimpleMap() {
  const { airports, center, zoom, setMap, setMaps} =
    React.useContext(DataContext);

  const createMapOptions = () => {
    return {
      styles: mapStyles,
    };
  };

  const markers: any = airports.map((e: any, index) => {
    return <Marker key={index} lat={e.lat} lng={e.lng} text={e.iata_code} />;
  });

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "90vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBnHtmeHlo4x_kDwI1uOpujA_XhES_lkOc" }}
        onGoogleApiLoaded={({ map, maps }) => {
          setMap(map);
          setMaps(maps);
        }}
        center={center}
        zoom={zoom}
        options={(maps) => createMapOptions()}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}
