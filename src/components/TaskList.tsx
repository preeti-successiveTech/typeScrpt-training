"use client";

import { List, ListItem, ListItemText, Typography } from "@mui/material";

interface TaskListProps {
  list: string[];
}

export default function TaskList({ list }: TaskListProps) {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Task list
      </Typography>

      <List>
        {list.map((task, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
