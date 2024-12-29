import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1E88E5",
      light: "#6AB7FF",
      dark: "#005CB2",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFC107",
      light: "#FFD54F",
      dark: "#FFA000",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    error: {
      main: "#F44336",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#E0E0E0",
      secondary: "#B0BEC5",
    },
  },
});
