import * as React from "react";
import Helper from "../Helper";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { DataContext } from "../../contexts/DataContext";
import { Distance } from "./styles";


//COMPONENT THAT SHOWS THE DISTANCE BETWEEN AIRPORTS
export default function DistanceDisplay() {
  const { distance } = React.useContext(DataContext);
  return (
    <Distance>
      <FlightTakeoffIcon
        sx={{ marginRight: "10px", marginBottom: "1px" }}
        fontSize="large"
      />{" "}
      {distance} nm <Helper />
    </Distance>
  );
}
