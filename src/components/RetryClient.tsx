'use client';

import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function RetryClient() {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleRetry() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Retry fetch failed');
      const json: User[] = await res.json();
      setData(json);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <div>
        <h2>Something went wrong</h2>
        <p style={{ color: 'red' }}>{error}</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );

  if (data)
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </div>
    );

  return <button onClick={handleRetry}>Retry</button>;
}
