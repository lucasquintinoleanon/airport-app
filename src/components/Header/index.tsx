import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import AutoCompleteInput from "../AutoCompleteInput";
import { Button } from "@mui/material";
import { DataContext } from "../../contexts/DataContext";
import CloseIcon from "@mui/icons-material/Close";
import DistanceDisplay from "../DistanceDisplay";
import Logo from "../Logo";
import { smallDevice } from "../../constants";
import { Item, ResetButton } from "./styles";


//COMPONENET THAT SHOWS A HEADER ON DESKTOP DEVICES
export default function Header() {
  const {
    setStart,
    setEnd,
    start,
    end,
    handleCalculate,
    distance,
    handleReset,
  } = React.useContext(DataContext);

  return (
    <Box sx={{ width: "100%" }}>
      <Item>
        <Stack direction={smallDevice ? "column" : "row"} spacing={5}>
          <Logo />
          <AutoCompleteInput
            label="Starting Airport..."
            value={start}
            onSelect={setStart}
          />
          <AutoCompleteInput
            label="Ending Airport..."
            value={end}
            onSelect={setEnd}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "0.75rem", lineHeight: "0.75rem" }}
            onClick={() => {
              handleCalculate();
            }}
          >
            Calculate
          </Button>
          {!!distance && <DistanceDisplay />}
        </Stack>
        {!!distance && (
          <ResetButton
            variant="outlined"
            color="secondary"
            size="large"
            onClick={() => {
              handleReset();
            }}
          >
            Reset <CloseIcon fontSize="small" />
          </ResetButton>
        )}
      </Item>
    </Box>
  );
}
