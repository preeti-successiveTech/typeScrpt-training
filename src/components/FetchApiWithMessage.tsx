// app/fetch-api/page.tsx
import RetryClient from "./RetryClient";

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function FetchApiWithMessage() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store", // ensures SSR fetches fresh data
    });

    if (!res.ok) {
      throw new Error("Fetch failed");
    }

    const data: User[] = await res.json();

    return (
      <main style={{ padding: "1rem" }}>
        <h1>User List</h1>
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    console.error("Server fetch error:", error);
    return (
      <main style={{ padding: "1rem" }}>
        <RetryClient />
      </main>
    );
  }
}
