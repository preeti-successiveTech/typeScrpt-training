"use client";

import useTimer from "@/app/day-2/hook/useTimer";



export default function Timer() {
  const { time, start, pause, reset } = useTimer(60);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "300px",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>
          Countdown: <span style={{ color: "#0070f3" }}>{time}</span>
        </h2>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button style={btnStyle} onClick={start}>
            Start
          </button>
          <button style={btnStyle} onClick={pause}>
            Pause
          </button>
          <button style={btnStyle} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}

const btnStyle: React.CSSProperties = {
  padding: "8px 14px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px",
};
