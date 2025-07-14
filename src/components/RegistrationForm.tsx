"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

type FormData = {
  password: string;
  confirmPassword: string;
};

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Real-time validation for password match
  useEffect(() => {
    if (
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      setError("Passwords do not match.");
      setSubmitted(false);
    } else {
      setError("");
    }
  }, [formData.password, formData.confirmPassword]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData({ password: "", confirmPassword: "" }); // reset form
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 400,
        margin: "20px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 6,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Register</h2>
      <div style={{ marginBottom: 15 }}>
        <label
          htmlFor="password"
          style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label
          htmlFor="confirmPassword"
          style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}
        >
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 4,
            border: error ? "1px solid red" : "1px solid #ccc",
            fontSize: 16,
          }}
        />
      </div>

      {error && (
        <p style={{ color: "red", marginBottom: 15, fontWeight: "bold" }}>
          {error}
        </p>
      )}
      {submitted && (
        <p style={{ color: "green", marginBottom: 15, fontWeight: "bold" }}>
          Registration successful!
        </p>
      )}

      <button
        type="submit"
        disabled={
          !formData.password ||
          !formData.confirmPassword ||
          !!error
        }
        style={{
          width: "100%",
          padding: 12,
          fontSize: 16,
          borderRadius: 6,
          border: "none",
          backgroundColor: !error ? "#1976d2" : "#aaa",
          color: "white",
          cursor:
            !formData.password || !formData.confirmPassword || error
              ? "not-allowed"
              : "pointer",
        }}
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
