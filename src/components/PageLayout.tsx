import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Navbar } from "./Navbar";

interface PageLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title = "My App",
  children,
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
      }}
    >
      <Navbar title={title} />

      <Box
        component="main"
        sx={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        <Container maxWidth="md" disableGutters sx={{ py: 4 }}>
          {children}
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 2,
          textAlign: "center",
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Your App Name. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};
