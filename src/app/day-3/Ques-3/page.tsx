"use client";

import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import { AuthProvider } from "@/context/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

export default function showNavigation({ children }: LayoutProps) {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <AuthProvider>
          <Navigation />
          {children}
      </AuthProvider>
    </div>
  );
}