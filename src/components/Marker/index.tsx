import * as React from "react";
import Flight from "@mui/icons-material/Flight";
const MARKER_SIZE = 10;

type Prop = {
  text: string;
  lat: number;
  lng: number;
};

export default function Marker({ text, lat, lng }: Prop) {
  return (
    <div
      style={{
        position: "absolute",
        width: MARKER_SIZE,
        height: MARKER_SIZE,
        left: -MARKER_SIZE / 2,
        top: -MARKER_SIZE / 2,
        color: "#8fc9f9",
      }}
    >
      <Flight color="primary" />
      {text}
    </div>
  );
}
