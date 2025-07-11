"use client";
import React, { useState, ChangeEvent } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);

    if (value === "" || isNaN(Number(value))) {
      setFahrenheit("");
    } else {
      const f = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === "" || isNaN(Number(value))) {
      setCelsius("");
    } else {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  };

  return (
    <div
      style={{
        maxWidth: 320,
        margin: "20px auto",
        padding: 16,
        border: "1px solid #ccc",
        borderRadius: 8,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 16 }}>
        Temperature Converter
      </h2>

      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block", marginBottom: 6 }}>
          Celsius:
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="°C"
            style={{
              marginLeft: 8,
              padding: 6,
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
        </label>
      </div>

      <div>
        <label style={{ display: "block", marginBottom: 6 }}>
          Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="°F"
            style={{
              marginLeft: 8,
              padding: 6,
              width: "100%",
              boxSizing: "border-box",
              borderRadius: 4,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default TemperatureConverter;
