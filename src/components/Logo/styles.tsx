import { styled } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
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
