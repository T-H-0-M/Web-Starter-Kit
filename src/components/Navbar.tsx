import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  title: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <AppBar position="static" enableColorOnDark>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box>
          <Button
            color="secondary"
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            sx={{ mr: 2 }}
            onClick={() => navigate("/about")}
          >
            About
          </Button>
          <Button color="secondary" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
