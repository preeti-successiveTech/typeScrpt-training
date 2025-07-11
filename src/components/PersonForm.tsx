"use client";

import { TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function PersonForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>();

  const formContainerStyle = {
    maxWidth: 400,
    margin: "2rem auto",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: 8,
    backgroundColor: "#fafafa",
    fontFamily: "Roboto, sans-serif",
  };

  const formGroupStyle = {
    display: "flex",
    flexDirection: "column" as const,
    marginBottom: "1.5rem",
  };

  const labelStyle = {
    fontWeight: 600,
    marginBottom: "0.5rem",
    color: "#333",
  };

  return (
    <div >
    <div style={formContainerStyle}>
      <div style={formGroupStyle}>
        <label htmlFor="firstName" style={labelStyle}>
          First Name
        </label>
        <TextField
          id="firstName"
          label="Enter First Name"
          variant="outlined"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="lastName" style={labelStyle}>
          Last Name
        </label>
        <TextField
          id="lastName"
          label="Enter Last Name"
          variant="outlined"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div style={formGroupStyle}>
        <label htmlFor="age" style={labelStyle}>
          Age
        </label>
        <TextField
          id="age"
          label="Enter Age"
          variant="outlined"
          type="number"
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
      </div>
    </div>
      <div style={formContainerStyle}>
        <Typography variant="h6">First Name : {firstName}</Typography>
        <Typography variant="h6">Last Name : {lastName}</Typography>
        <Typography variant="h6">Age : {age}</Typography>
      </div>
    </div>
  );
}
