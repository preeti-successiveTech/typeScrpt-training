"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navigation from "@/components/Navigation";
export default function About() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/day-3/pages/Login");
    }
  }, [isAuthenticated, router]);

  return (
    <>
     <Navigation/>
    <div style={{ backgroundColor: "rgb(250, 249, 246)", height: "100vh" }}>
      <div
        style={{
          margin: "auto",
          width: "75%",
          textAlign: "center",
          paddingTop: "25%",
        }}
      >
        {isAuthenticated ? (
          <div style={{ fontSize: "50px", fontWeight: "bold" }}>
            Welcome to About Page
          </div>
        ) : (
          <div style={{ fontSize: "50px", fontWeight: "bold" }}>
            Kindly, Login
          </div>
        )}
      </div>
    </div>
    </>
  );
}
