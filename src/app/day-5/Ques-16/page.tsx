
import UserList from "@/components/UserList";
import withDataFetching from "@/components/WithDataFetching";

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return users;
}

// UserList expects a prop `data` of type User[]
const UsersPage = withDataFetching(UserList, fetchUsers);

export default UsersPage;
