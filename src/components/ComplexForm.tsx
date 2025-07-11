"use client";
import React from "react";
import { useFormik, FormikHelpers } from "formik";
import { validationSchema } from "@/validationSchema";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

interface FormValues {
  email: string;
  password: string;
  phone: string;
}

export default function ComplexForm() {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
      phone: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
      alert("Form submitted successfully:\n" + JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          mt: 4,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "background.paper",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          Real-Time Validation Form
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
        />

        <TextField
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          required
        />

        <TextField
          fullWidth
          margin="normal"
          id="phone"
          name="phone"
          label="Phone Number"
          type="tel"
          autoComplete="tel"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          required
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          disabled={!(formik.isValid && formik.dirty)}
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
