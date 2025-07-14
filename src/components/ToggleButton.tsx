"use client";

import { useTheme } from "@/context/ThemeContext";
import { CSSProperties } from "react";

export const ToggleButton = () => {
  const { theme, toggle } = useTheme();

  const toggleButtonStyles: CSSProperties = {
    position: "absolute",
    top: "10rem",
    left: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: theme === "light" ? "#0070f3" : "white",
    color: theme === "light" ? "#fff" : "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div>
      <button onClick={toggle} style={toggleButtonStyles}>
        Theme
      </button>
    </div>
  );
};
