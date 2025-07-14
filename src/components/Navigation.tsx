"use client";
import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "0.75rem 2rem",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "flex-end",
          gap: "2rem",
        }}
      >
        <li style={{ display: "inline-block" }}>
          <Link href="/day-3/pages/Home" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={{ display: "inline-block" }}>
          <Link href="/day-3/pages/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li style={{ display: "inline-block" }}>
          <Link href="/day-3/pages/Login" style={{ textDecoration: "none" }}>
            <button style={buttonStyle}>Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "1.5rem",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#0070f3",
  border: "none",
  padding: "0.5rem 1.5rem",
  borderRadius: 4,
  color: "#fff",
  cursor: "pointer",
  fontSize: "1.2rem",
  transition: "background-color 0.3s ease",
};
