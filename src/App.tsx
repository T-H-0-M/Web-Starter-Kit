import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { auth } from "./config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./config/theme";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { SignupPage } from "./pages/Signup";
import { ThemeProvider, useThemeContext } from "./context/ThemeContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <ThemeProvider>
      <AppContent isAuthenticated={isAuthenticated} />
    </ThemeProvider>
  );
};

const AppContent: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  const { isDarkMode } = useThemeContext();
  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <AnimatedRoutes isAuthenticated={isAuthenticated} />
      </Router>
    </MuiThemeProvider>
  );
};

// This component handles route transitions
const AnimatedRoutes: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
          />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
