import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import AutoCompleteInput from "../AutoCompleteInput";
import { Button } from "@mui/material";
import { DataContext } from "../../contexts/DataContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "10vh",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    height: "40vh",
    justifyContent: "center",
  },
}));

const Distance = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 32,
}));

export default function Header() {
  const { setStart, setEnd, start, end, handleCalculate, distance } =
    React.useContext(DataContext);

  const smallDevice = window.innerWidth < 600;
  return (
    <Box sx={{ width: "100%" }}>
      <Item>
        <Stack direction={smallDevice ? "column" : "row"} spacing={5}>
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
            onClick={() => {
              handleCalculate();
            }}
          >
            Calculate
          </Button>
          {!!distance && <Distance>{distance} nmi</Distance>}
        </Stack>
      </Item>
    </Box>
  );
}
