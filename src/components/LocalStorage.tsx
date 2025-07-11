"use client";

import useLocalStorage from "@/app/day-2/hook/useLocalStorage";



export default function LocalStorage() {
  const [name, setName] = useLocalStorage<string>("username", "");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Save Name to LocalStorage</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <p style={{ fontSize: "18px", margin: 0 }}>
          Hello, <strong>{name || "Guest"}</strong>
        </p>
      </div>
    </div>
  );
}
