import * as React from "react";
import Flight from "@mui/icons-material/Flight";
import { MarkerProp } from "../../types";
const MARKER_SIZE = 10;

//COMPONENET THAT RENDER A MARK FOR THE AIRPORT ON THE MAP
export default function Marker({ text }: MarkerProp) {
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
