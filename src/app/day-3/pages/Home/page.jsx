"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Navigation from '@/components/Navigation'

export default function Home() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  console.log(isAuthenticated);

  return (
    <>
    <Navigation/>
    <div style={{ backgroundColor: "rgb(250, 249, 246)", height: "100vh" }}>
      <div
        style={{
          fontSize: "50px",
          textAlign: "center",
          paddingTop: "25%",
          fontWeight: "bold",
        }}
      >
        Welcome Preeti
      </div>
    </div>
    </>
  );
}
