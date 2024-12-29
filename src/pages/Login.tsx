import React, { useState } from "react";
import { auth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { PageLayout } from "../components/PageLayout";
import { Link as RouterLink } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <PageLayout title="Login">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Paper
          elevation={4}
          sx={{
            p: 4,
            backgroundColor: "background.paper",
            borderRadius: 2,
            width: "100%",
            maxWidth: 400,
          }}
        >
          <Typography variant="h5" textAlign="center" mb={2}>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                required
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Box textAlign="center" mt={3}>
            <Typography variant="body2" mt={1}>
              Forgot your password?{" "}
              <MuiLink
                component={RouterLink}
                to="/reset-password"
                underline="hover"
              >
                Reset here
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              Don’t have an account?{" "}
              <MuiLink component={RouterLink} to="/signup" underline="hover">
                Sign up
              </MuiLink>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </PageLayout>
  );
};
