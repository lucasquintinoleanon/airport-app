import { Autocomplete } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomAutocomplete: any = styled(Autocomplete)(({ theme }) => ({
  width: "18vw",
  [theme.breakpoints.down("xl")]: {
    width: "16vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));