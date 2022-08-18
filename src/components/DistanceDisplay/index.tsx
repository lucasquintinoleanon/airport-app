import * as React from "react";
import { styled } from "@mui/material/styles";
import Helper from "../Helper";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { DataContext } from "../../contexts/DataContext";

const Distance = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "initial",
  fontSize: '1.25rem',
}));

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
