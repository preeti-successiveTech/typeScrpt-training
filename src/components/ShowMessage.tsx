"use client";
import React, { useState, ChangeEvent } from "react";

function Message() {
  return <p style={{ marginTop: 16, color: "green", fontWeight: "bold" }}>
    The secret message is now visible!
  </p>;
}

export default function ShowMessage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [shouldShowMessage, setShouldShowMessage] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim().toLowerCase() === "show") {
      setShouldShowMessage(true);
    } else {
      setShouldShowMessage(false);
    }
  };

  return (
    <div style={{ maxWidth: 320, margin: "20px auto", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Type 'show' and click"
        value={inputValue}
        onChange={handleChange}
        style={{
          padding: 8,
          fontSize: 16,
          width: "calc(100% - 90px)",
          marginRight: 8,
          borderRadius: 4,
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "8px 16px",
          fontSize: 16,
          borderRadius: 4,
          border: "none",
          backgroundColor: "#1976d2",
          color: "white",
          cursor: "pointer",
        }}
      >
        Submit
      </button>

      {shouldShowMessage && <Message />}
    </div>
  );
}
