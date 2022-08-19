import * as React from "react";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import { Container } from "./styles";


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
