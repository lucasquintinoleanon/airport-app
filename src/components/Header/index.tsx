import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import AutoCompleteInput from "../AutoCompleteInput";
import { Button } from "@mui/material";
import { DataContext } from "../../contexts/DataContext";
import CloseIcon from "@mui/icons-material/Close";
import DistanceDisplay from "../DistanceDisplay";
import Logo from "../Logo";

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
    height: "60vh",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

const ResetButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  marginLeft: "auto",
  height: 56,
  fontSize: "0.75rem",
  lineHeight: '0.75rem',
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginTop: theme.spacing(4),
    width: "90%",
  },
}));

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

  const smallDevice = window.innerWidth < 600;
  return (
    <Box sx={{ width: "100%" }}>
      <Item>
        <Stack direction={smallDevice ? "column" : "row"} spacing={5}>
          <Logo/>
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
            size="small"
            sx={{ fontSize: "0.75rem", }}
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
            size="small"
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
