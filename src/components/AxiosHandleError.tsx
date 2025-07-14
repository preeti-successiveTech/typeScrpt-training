
import axios from "axios";
import RetryAxiosHandle from "./RetryAxiosHandle";

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function AxiosHandleError() {
  try {
    const res = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/us"
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
  } catch (error) {
    return (
      <main style={{ padding: "2rem", color: "red" }}>
        <RetryAxiosHandle />
      </main>
    );
  }
}
