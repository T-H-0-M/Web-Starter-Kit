import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { useThemeContext } from "../context/ThemeContext";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const isHomePage = location.pathname === "/";
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out.");
      navigate("/login");
    } catch (error) {}
  };
  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };
  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleTheme}>
            <ListItemText
              primary={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        {isAuthenticated && !isHomePage && (
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        )}
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/about")}>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <Divider />
        {isAuthenticated ? (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/login")}>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" enableColorOnDark>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              YourApp
            </Typography>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton color="inherit" sx={{ mr: 2 }} onClick={toggleTheme}>
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {isAuthenticated && !isHomePage && (
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
                onClick={() => navigate("/")}
              >
                Home
              </Button>
            )}
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              onClick={() => navigate("/about")}
            >
              About
            </Button>
            {isAuthenticated ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </Drawer>
    </>
  );
};
