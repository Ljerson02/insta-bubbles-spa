import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    color: '#4C4C4C',
    allVariants: {
      color: '#4C4C4C',
    },
  },
  palette: {
    primary: {
      main: "#22A7FF",
    },
    secondary: {
      main: "#FFC1CC",
    },
    error: {
      main: "#BF0022",
    },
  },
});