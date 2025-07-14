"use client";

import React, { useState, ChangeEvent } from "react";

export default function SearchFilter() {
  const [query, setQuery] = useState<string>("");

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Grapes",
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        maxWidth: 360,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        padding: 16,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 12 }}>Search Fruits</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={handleChange}
        aria-label="Search fruits"
        style={{
          width: "100%",
          padding: 8,
          fontSize: 16,
          borderRadius: 4,
          border: "1px solid #ccc",
          marginBottom: 16,
          boxSizing: "border-box",
        }}
      />

      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "8px 12px",
                borderBottom: "1px solid #eee",
                cursor: "default",
              }}
              tabIndex={0}
            >
              {item}
            </li>
          ))
        ) : (
          <li style={{ color: "#888", fontStyle: "italic" }}>
            No matching items
          </li>
        )}
      </ul>
    </div>
  );
}
