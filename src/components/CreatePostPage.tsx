'use client';

import { useState, FormEvent } from 'react';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';

type Status = 
  | { type: 'success'; message: string }
  | { type: 'error'; message: string }
  | null;

export default function CreatePostPage() {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1,
      });

      if (response.status === 201) {
        setStatus({ type: 'success', message: 'Post submitted successfully!' });
        setTitle('');
        setBody('');
      } else {
        throw new Error('Unexpected response');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to submit post. Try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create a Post
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <TextField
          label="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Post Content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <Box sx={{ position: 'relative', mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            fullWidth
            size="large"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: 'primary.main',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
        </Box>

        {status && (
          <Alert severity={status.type} sx={{ mt: 3 }}>
            {status.message}
          </Alert>
        )}
      </Box>
    </Container>
  );
}
