"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navigation from "@/components/Navigation";
export default function Login() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "Preeti" && password === "123") {
      setIsAuthenticated(true);
      alert("User LoggedIn Successfully");
      setTimeout(() => {
        router.push("/day-3/pages/about");
      }, 1000);
    }
    setName("");
    setPassword("");
  };

  return (
    <div>
       <Navigation/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingTop: "200px",
            textAlignLast: "center",
          }}
        >
          <div style={{ fontSize: "40px", fontWeight: "bold" }}>Log In</div>
          <input
            type="text"
            placeholder="enter the text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            style={{border: "solid 2px black"}}
          />
          <input
            type="password"
            placeholder="enter the password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{border: "solid 2px black"}}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "rgb(49, 137, 221)",
              color: "white",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontSize: "20px",
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
