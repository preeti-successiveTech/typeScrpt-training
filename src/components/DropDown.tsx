"use client";
import React, { useState, ChangeEvent } from "react";

export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: 320,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <label
        htmlFor="name-select"
        style={{ display: "block", marginBottom: 8, fontWeight: "bold" }}
      >
        Select a Name
      </label>
      <select
        id="name-select"
        value={selectedOption}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: 8,
          fontSize: 16,
          borderRadius: 6,
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        aria-label="Select a name"
      >
        <option value="" disabled>
          -- Choose an option --
        </option>
        <option value="Meena">Meena</option>
        <option value="Anuj">Anuj</option>
        <option value="Anil">Anil</option>
        <option value="Rinku">Rinku</option>
      </select>

      {selectedOption && (
        <p style={{ marginTop: 16, fontSize: 18 }}>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
}
