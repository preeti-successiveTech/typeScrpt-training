"use client";

import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function PaginationComponent() {
  const pageSize = 2;  
  const [data, setData] = useState<User[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users: User[] = await res.json();
      setData(users);
    }
    fetchUsers();
  }, []);

  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <ul>
        {paginatedData.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
}
