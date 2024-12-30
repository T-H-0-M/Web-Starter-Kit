import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  Box,
} from "@mui/material";

interface ResetPasswordModalProps {
  open: boolean;
  onClose: () => void;
}

export const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
  open,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleResetPassword = async () => {
    setError(null);
    setSuccess(null);

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(`A password reset link has been sent to ${email}`);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box sx={{ p: 3 }}>
        <DialogTitle sx={{ pb: 1, fontWeight: 600 }}>
          Reset Your Password
        </DialogTitle>

        <DialogContent sx={{ px: 3, pt: 2, pb: 3 }}>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            required
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}
        </DialogContent>

        <DialogActions sx={{ px: 3, pt: 1, justifyContent: "space-between" }}>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleResetPassword}
          >
            Send Reset Link
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
