"use client";

import React, { ReactNode } from "react";

interface ModalPageProps{
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ModalPage({ isOpen, onClose, children }: ModalPageProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 999,
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 8,
          zIndex: 1000,
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            border: "none",
            background: "none",
            fontSize: 20,
            cursor: "pointer",
          }}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </>
  );
}
