import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  updateProfile,
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
import { Link as RouterLink } from "react-router-dom";

export const SignupPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });

      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleGoogleSignup = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <PageLayout title="Signup">
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
            Sign Up
          </Typography>
          <form onSubmit={handleSignup}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={2}
              sx={{ mb: 2 }}
            >
              <TextField
                fullWidth
                required
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                fullWidth
                required
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
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

            <Box sx={{ mb: 2 }}>
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

            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                required
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              Signup
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
            onClick={handleGoogleSignup}
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
            Sign up with Google
          </Button>
          <Box textAlign="center" mt={3}>
            <Typography variant="body2">
              Already have an account?{" "}
              <MuiLink component={RouterLink} to="/login" underline="hover">
                Log in
              </MuiLink>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </PageLayout>
  );
};
