"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button, CircularProgress, Box } from "@mui/material";

interface User {
  id: number;
  name: string;
  email: string;
}

// Custom type guard to check if error is axios error
function isAxiosError(error: any): error is { isAxiosError: boolean; message: string } {
  return error?.isAxiosError === true;
}

const RetryAxiosHandle: React.FC = () => {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleRetry() {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        setError(err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  if (loading)
    return (
      <Box display="flex" alignItems="center" gap={1}>
        <CircularProgress size={24} />
        <span>Loading...</span>
      </Box>
    );

  if (error)
    return (
      <>
        <h1>Something happened</h1>
        <p style={{ color: "red" }}>{error}</p>
        <Button variant="contained" onClick={handleRetry}>
          Retry
        </Button>
      </>
    );

  if (data)
    return (
      <ul style={{ color: "black" }}>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    );

  return (
    <>
      <h1>No data yet</h1>
      <Button variant="contained" onClick={handleRetry}>
        Load Users
      </Button>
    </>
  );
};

export default RetryAxiosHandle;
