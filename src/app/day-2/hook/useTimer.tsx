"use client";

import { useState, useEffect } from "react";

export default function useTimer(initial: number) {
  const [time, setTime] = useState<number>(initial);
  const [isRunning, setRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time, isRunning]);

  function start() {
    setRunning(true);
  }

  function pause() {
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setTime(initial);
  }

  return { time, start, pause, reset };
}
