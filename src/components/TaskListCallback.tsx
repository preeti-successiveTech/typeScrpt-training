import { useCallback, useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskListCallback() {
  const [task, setTask] = useState<Task[]>([
    { id: 1, title: "Java", completed: false },
    { id: 2, title: "React", completed: false },
    { id: 3, title: "Next", completed: false },
    { id: 4, title: "C++", completed: false },
    { id: 5, title: "Python", completed: false },
  ]);

  const completeTask = useCallback((id: number): void => {
    setTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          minWidth: "350px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Task List</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {task.map((task) => (
            <li
              key={task.id}
              style={{
                marginBottom: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "gray" : "#333",
                  fontWeight: 500,
                  flex: 1,
                }}
              >
                {task.title}
              </span>
              <button
                onClick={() => completeTask(task.id)}
                disabled={task.completed}
                style={{
                  padding: "6px 12px",
                  backgroundColor: task.completed ? "#ccc" : "#0070f3",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: task.completed ? "not-allowed" : "pointer",
                }}
              >
                {task.completed ? "Completed" : "Complete"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
