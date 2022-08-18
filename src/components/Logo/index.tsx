import * as React from "react";
import { styled } from "@mui/material/styles";

import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

const Container = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "initial",
  fontSize: '1.25rem',
  fontWeight: 'bold',
  [theme.breakpoints.down("sm")]: {
    fontSize: 22,
  },
}));

export default function Logo() {
  return (
    <Container>
      <ConnectingAirportsIcon
        sx={{ marginRight: "10px", fontSize: 42 }}
        fontSize="large"
      />
      Airport Distance
    </Container>
  );
}
