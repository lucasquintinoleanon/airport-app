import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => ({
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

export const ResetButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  marginLeft: "auto",
  height: 56,
  fontSize: "0.75rem",
  lineHeight: "0.75rem",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginTop: theme.spacing(4),
    width: "100%",
    fontSize: "1rem",
    lineHeight: "1rem",
  },
}));
