"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subscribe: boolean;
  gender: string;
}

function ControlledForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subscribe: false,
    gender: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Registration Form</h2>

      <div style={styles.field}>
        <label htmlFor="name" style={styles.label}>
          Name:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your name"
        />
      </div>

      <div style={styles.field}>
        <label htmlFor="email" style={styles.label}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your email"
        />
      </div>

      <div style={{ ...styles.field, flexDirection: "row", alignItems: "center" }}>
        <input
          id="subscribe"
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
          style={{ marginRight: 8 }}
        />
        <label htmlFor="subscribe" style={styles.label}>
          Subscribe to newsletter
        </label>
      </div>

      <fieldset style={styles.fieldset}>
        <legend style={styles.label}>Gender:</legend>

        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
            style={{ marginRight: 6 }}
          />
          Male
        </label>

        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
            style={{ marginRight: 6 }}
          />
          Female
        </label>

        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
            style={{ marginRight: 6 }}
          />
          Other
        </label>
      </fieldset>

      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  form: {
    maxWidth: 400,
    margin: "20px auto",
    padding: 24,
    border: "1px solid #ccc",
    borderRadius: 8,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  label: {
    marginBottom: 6,
    fontWeight: 600,
    color: "#444",
  },
  input: {
    padding: "8px 12px",
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  fieldset: {
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: "10px 15px",
    marginBottom: 20,
  },
  radioLabel: {
    display: "block",
    marginBottom: 8,
    fontWeight: 500,
    color: "#555",
  },
  button: {
    width: "100%",
    padding: "10px 0",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default ControlledForm;
