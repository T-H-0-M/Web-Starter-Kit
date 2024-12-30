import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4CAF50", // Pastel Green
      light: "#81C784", // Lighter Pastel Green
      dark: "#388E3C", // Deeper Green
      contrastText: "#FFFFFF", // White text for good contrast
    },
    secondary: {
      main: "#66BB6A", // Soft Green Pastel
      light: "#A5D6A7", // Lighter Green
      dark: "#338A3E", // Deeper Green for accents
      contrastText: "#000000", // Black text for contrast
    },
    background: {
      default: "#121212", // Standard dark background
      paper: "#1E1E1E", // Slightly lighter for cards
    },
    error: {
      main: "#F44336", // Pastel Red
      light: "#FF7961", // Lighter Red
      dark: "#BA000D", // Deeper Red
      contrastText: "#FFFFFF", // White text for errors
    },
    text: {
      primary: "#E8F5E9", // Very light green for text
      secondary: "#A5D6A7", // Subtle greenish white for secondary text
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#81C784", // Pastel Green
      light: "#A5D6A7", // Lighter Pastel Green
      dark: "#519657", // Deeper Green
      contrastText: "#FFFFFF", // White text for contrast
    },
    secondary: {
      main: "#AED581", // Lime Green Pastel
      light: "#DCE775", // Lighter Lime Green
      dark: "#7CB342", // Deeper Lime Green
      contrastText: "#000000", // Black text for contrast
    },
    background: {
      default: "#F1F8E9", // Soft pastel greenish white
      paper: "#FFFFFF", // White for cards and papers
    },
    error: {
      main: "#E57373", // Light Red
      contrastText: "#FFFFFF", // White text for contrast
    },
    text: {
      primary: "#1B5E20", // Deep Green for primary text
      secondary: "#4CAF50", // Lighter Green for secondary text
    },
  },
});
