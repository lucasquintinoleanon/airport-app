import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { Divider, Fab, IconButton, Stack } from "@mui/material";
import Logo from "../Logo";
import AutoCompleteInput from "../AutoCompleteInput";
import { DataContext } from "../../contexts/DataContext";
import DistanceDisplay from "../DistanceDisplay";
import { ResetButton } from "../Header/styles";
import { Container, DrawerHeader } from "./styles";


//COMPONENET THAT SHOWS A DRAWEN ON MOBILE DEVICES
export function CustomDrawer() {
  const [state, setState] = React.useState(false);
  const {
    setStart,
    setEnd,
    start,
    end,
    handleCalculate,
    distance,
    handleReset,
  } = React.useContext(DataContext);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  const list = () => (
    <React.Fragment key={"left"}>
      <Box
        sx={{ width: "80vw", padding: "5vw" }}
        role="presentation"
      >
        <Stack direction={"column"} spacing={5}>
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
            size="small"
            sx={{ height: 56, fontSize: "1rem", lineHeight: "1rem" }}
            onClick={() => {
              setState(false)
              handleCalculate();
            }}
          >
            Calculate
          </Button>
        </Stack>
        {!!distance && (
          <ResetButton
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => {
              setState(false)
              handleReset();
            }}
          >
            Reset <CloseIcon fontSize="small" />
          </ResetButton>
        )}
      </Box>
    </React.Fragment>
  );

  return (
    <>
      <Fab
        onClick={toggleDrawer(true)}
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", top: 10, left: 10 }}
      >
        <MenuIcon />
      </Fab>
      {!!distance && (
        <Container>
          <DistanceDisplay />
        </Container>
      )}
      <SwipeableDrawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {list()}
      </SwipeableDrawer>
    </>
  );
}
