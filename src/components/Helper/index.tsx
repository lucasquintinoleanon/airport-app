import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import { smallDevice } from "../../constants";

export default function Helper() {
  return (
    !smallDevice ? (
      <Tooltip
        style={{ marginLeft: 10 }}
        disableFocusListener
        disableTouchListener
        title="The app use haversine formula to calculate the distance between latitude/longitude points assuming a spherical earth."
      >
        <HelpIcon />
      </Tooltip>
    ) : <></>
  );
}
