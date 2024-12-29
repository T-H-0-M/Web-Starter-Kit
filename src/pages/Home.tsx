import React from "react";
import { auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { Button, Typography, Box } from "@mui/material";
import { PageLayout } from "../components/PageLayout";

export const HomePage: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <PageLayout title="Home Page">
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Hello, {auth.currentUser?.displayName}!
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          This is your homepage. Feel free to explore and enjoy the application.
        </Typography>

        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </PageLayout>
  );
};
