import React, { useState } from "react";
import { auth } from "../config/firebaseConfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { PageLayout } from "../components/PageLayout";
import { ResetPasswordModal } from "../components/ResetPasswordModal";
import { Link as RouterLink } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [resetModalOpen, setResetModalOpen] = useState(false);

  const provider = new GoogleAuthProvider();
  const handleOpenResetModal = () => setResetModalOpen(true);
  const handleCloseResetModal = () => setResetModalOpen(false);

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

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
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

          {/* Email/Password form */}
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
            <Button
              type="submit"
              sx={{
                mt: 2,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
              }}
              variant="contained"
              color="primary"
              fullWidth
            >
              Login
            </Button>
          </form>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleGoogleLogin}
            startIcon={<Google sx={{ fontSize: 24 }} />}
            sx={{
              mt: 2,
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 48,
            }}
          >
            Sign in with Google
          </Button>

          <Box textAlign="center" mt={3}>
            <Typography variant="body2" mt={1}>
              Forgot your password?{" "}
              <MuiLink
                component="button"
                onClick={handleOpenResetModal}
                underline="hover"
              >
                Reset password
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

      <ResetPasswordModal
        open={resetModalOpen}
        onClose={handleCloseResetModal}
      />
    </PageLayout>
  );
};
