import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const position: [number, number] = [41.9028, 12.4964];
const CityMap: React.FC = () => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      className="col-span-1 pt-12"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Rome</Popup>
      </Marker>
    </MapContainer>
  );
};
export default CityMap;
