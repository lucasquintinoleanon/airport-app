import * as React from "react";
import { styled } from "@mui/material/styles";
import Helper from "../Helper";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { DataContext } from "../../contexts/DataContext";

const Container = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "initial",
  fontSize: 32,
  fontWeight: 'bold',
  [theme.breakpoints.down("sm")]: {
    fontSize: 22,
  },
}));

export default function Logo() {
  return (
    <Container>
      <ConnectingAirportsIcon
        sx={{ marginRight: "10px", fontSize: 50 }}
        fontSize="large"
      />
      Airport Distance App
    </Container>
  );
}
