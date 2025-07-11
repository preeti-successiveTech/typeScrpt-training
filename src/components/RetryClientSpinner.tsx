'use client';

import { useState } from 'react';
import {
  Button,
  CircularProgress,
  Typography,
  Box,
  List,
  ListItem,
} from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
}

interface RetryClientSpinnerProps {
  serverError?: string;
}

export default function RetryClientSpinner({
  serverError,
}: RetryClientSpinnerProps) {
  const [data, setData] = useState<User[] | null>(null);
  const [clientError, setClientError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [retrying, setRetrying] = useState<boolean>(false);

  async function handleRetry() {
    setLoading(true);
    setRetrying(true);
    setClientError(null);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Retry fetch failed');
      const json: User[] = await res.json();
      setData(json);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setClientError(err.message);
      } else {
        setClientError('Unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }

  if (data) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          User List (Retry Success)
        </Typography>
        <List>
          {data.map((user) => (
            <ListItem key={user.id}>
              {user.name} — {user.email}
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      {!retrying && serverError && (
        <Typography variant="body1" color="error" gutterBottom>
          {serverError}
        </Typography>
      )}

      {clientError && (
        <Typography variant="body1" color="error" gutterBottom>
          {clientError}
        </Typography>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CircularProgress size={24} />
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <Button variant="contained" onClick={handleRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
}
