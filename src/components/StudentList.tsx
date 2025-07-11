"use client";

import { useMemo, useState, ChangeEvent } from "react";

export default function StudentList() {
  const initialStudents: string[] = ["Preeti", "Neha", "Akash"];
  const [students, setStudents] = useState<string[]>(initialStudents);
  const [inputValue, setInputValue] = useState<string>("");

  function add(): void {
    if (inputValue.trim()) {
      setStudents([...students, inputValue.trim()]);
      setInputValue("");
    }
  }

  const displayStudent = useMemo(() => {
    return students.map((name, index) => <li key={index}>{name}</li>);
  }, [students]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          minWidth: "350px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Student List
        </h2>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter student name"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <button
            onClick={add}
            style={{
              padding: "8px 12px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {displayStudent}
        </ul>
      </div>
    </div>
  );
}
