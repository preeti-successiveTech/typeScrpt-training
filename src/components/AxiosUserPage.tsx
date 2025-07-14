// app/axios-users/page.tsx

import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function AxiosUsersPage() {
  try {
    const res = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = res.data;

    return (
      <main style={{ padding: "2rem" }}>
        <h1>Users (Fetched with Axios)</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error: unknown) {
    // Type guard to safely access error.message
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    return (
      <main style={{ padding: "2rem", color: "red" }}>
        <h1>Failed to fetch users</h1>
        <p>{message}</p>
      </main>
    );
  }
}
