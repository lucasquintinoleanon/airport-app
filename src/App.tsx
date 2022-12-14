import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DataProvider } from "./contexts/DataContext";
import { CustomDrawer as Drawer } from "./components/Drawer";
import { smallDevice } from "./constants";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DataProvider>
        {smallDevice ? <Drawer /> : <Header />}
        <Map />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
