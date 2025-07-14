"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/validationSchema";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Alert,
  List,
  ListItem,
} from "@mui/material";

interface FormValues {
  email: string;
  password: string;
  phone: string;
}

export default function ValidatedFormFormik() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    criteriaMode: "all",
  });

  const [submitErrors, setSubmitErrors] = useState<string[]>([]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSubmitErrors([]);
    alert("Form submitted successfully!\n" + JSON.stringify(data, null, 2));
    reset();
  };

  const onInvalid: SubmitErrorHandler<FormValues> = (errors) => {
    // Extract all error messages for summary display
    const allErrors = Object.values(errors).flatMap((error) =>
      error.types ? Object.values(error.types) : [error.message || ""]
    );
    setSubmitErrors(allErrors);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          Validated Form with Error Summary
        </Typography>

        {/* Summary of errors */}
        {submitErrors.length > 0 && (
          <Alert severity="error" sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Please fix the following errors:
            </Typography>
            <List dense>
              {submitErrors.map((err, i) => (
                <ListItem key={i} sx={{ pl: 0 }}>
                  - {err}
                </ListItem>
              ))}
            </List>
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          required
          type="email"
          autoComplete="email"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          required
          autoComplete="new-password"
        />

        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          required
          inputMode="tel"
          autoComplete="tel"
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Box>
    </Container>
  );
}
