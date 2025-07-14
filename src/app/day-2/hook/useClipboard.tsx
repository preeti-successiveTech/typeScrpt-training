"use client";

import { useState } from "react";

export default function useClipboard() {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return { copied, copy };
}
