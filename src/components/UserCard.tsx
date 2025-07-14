"use client";

interface UserCard {
  name: string;
  email: string;
  avatarURL: string;
}

export default function UserCard({ name, email, avatarURL }: UserCard) {
  return (
    <div style={{display: "flex",
            flexWrap: "wrap",
            flexDirection: "row"}}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "16px",
          width: "260px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          margin: "1rem",
          
        }}
      >
        <img
          src={avatarURL}
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "12px",
            border: "2px solid #0070f3",
          }}
        />
        <h1
          style={{
            fontSize: "1.2rem",
            color: "#333",
            margin: "8px 0 4px",
          }}
        >
          name: {name}
        </h1>
        <h1
          style={{
            fontSize: "1rem",
            color: "#666",
            margin: "4px 0 0",
          }}
        >
          email: {email}
        </h1>
      </div>
    </div>
  );
}
