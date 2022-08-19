import { styled } from "@mui/material/styles";

export const Container: any = styled("div")(({ theme }) => ({
  height: "90vh",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
  },
}));
