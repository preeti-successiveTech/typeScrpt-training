"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";

interface InfoDialogProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
}

interface Errors {
  name: string;
  email: string;
}

const InfoDialog: React.FC<InfoDialogProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<Errors>({ name: "", email: "" });

  // Validation function
  const validate = () => {
    let nameError = "";
    let emailError = "";

    if (!formData.name.trim()) {
      nameError = "Name is required";
    }

    if (!formData.email.trim()) {
      emailError = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      emailError = "Email is invalid";
    }

    setErrors({ name: nameError, email: emailError });
  };

  // Compute validity from errors
  const isValid = !errors.name && !errors.email;

  // Run validation whenever formData changes
  useEffect(() => {
    if (open) {
      validate();
    }
  }, [formData, open]);

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      setFormData({ name: "", email: "" });
      setErrors({ name: "", email: "" });
    }
  }, [open]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!isValid) return;
    console.log("User Input:", formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User Information</DialogTitle>

      <DialogContent dividers>
        <Typography mb={2}>Please enter your details below:</Typography>
        <TextField
          margin="dense"
          label="Name"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          autoFocus
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" disabled={!isValid}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;
