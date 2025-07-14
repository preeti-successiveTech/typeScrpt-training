"use client";
import { useState, ChangeEvent } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={styles.container}>
      <label htmlFor="controlled-input" style={styles.label}>
        Enter text:
      </label>
      <input
        id="controlled-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={styles.input}
        placeholder="Type something..."
      />
      <p style={styles.output}>You typed: <strong>{inputValue}</strong></p>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fafafa",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  },
  output: {
    marginTop: "15px",
    fontSize: "18px",
    color: "#555",
  },
};

export default ControlledInput;
