"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function CounterWithStep() {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<number>(0);
  function Increment(): void {
    if (input === 0) {
      setCount(count + 1);
    } else {
      setCount(count + input);
    }
  }
  function Decrement(): void {
    if (input === 0) {
      setCount(count - 1);
    } else {
      setCount(count - input);
    }
  }
  return (
    <>
      <div>
        <h1>Count : {count}</h1>
        <TextField
          type="number"
          label="Enter step"
          variant="outlined"
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            setInput(value === "" ? 0 : parseInt(value));
          }}
        />
        <Button variant="contained" onClick={Increment}>
          Increment
        </Button>
        <Button variant="contained" onClick={Decrement}>
          Decrement
        </Button>
      </div>
    </>
  );
}
