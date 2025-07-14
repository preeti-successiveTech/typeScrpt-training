import React, { useState, ChangeEvent, FormEvent } from "react";

function ToDo() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() === "") return;

    setTasks((prev) => [...prev, task.trim()]);
    setTask("");
  };

  const handleDelete = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2 style={{ textAlign: "center" }}>Todo List</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={handleChange}
          style={{
            flexGrow: 1,
            padding: 8,
            fontSize: 16,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            fontSize: 16,
            borderRadius: 4,
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>

      <ul style={{ marginTop: 20, paddingLeft: 20 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              paddingBottom: 4,
            }}
          >
            {t}
            <button
              onClick={() => handleDelete(index)}
              style={{
                background: "transparent",
                border: "none",
                color: "#d32f2f",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              aria-label={`Delete task ${t}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
