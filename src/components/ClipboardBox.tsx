"use client";

import useClipboard from "@/app/day-2/hook/useClipboard";
import { useState } from "react";

export default function ClipBoardBox() {
  const [text, setText] = useState("");
  const { copied, copy } = useClipboard();

  function handleCopy() {
    if (text.trim() !== "") {
      copy(text);
    }
  }

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
        <h2 style={{ marginBottom: "20px" }}>Copy to Clipboard</h2>

        <input
          type="text"
          placeholder="Enter the text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleCopy}
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Copy
        </button>

        {copied && (
          <span style={{ display: "block", marginTop: "15px", color: "green" }}>
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}
