"use client";
import React from 'react';

interface User {
  id: number;
  name: string;
  email?: string; // optional if not used here
}

interface UserListProps {
  data: User[];
}

export default function UserList({ data }: UserListProps) {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
