"use client";

import { Button, Checkbox, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function TodoList() {
  const [list, setList] = useState<{ text: string; status: string }[]>([]);
  const [input, setInput] = useState<string>("");

  const formContainerStyle = {
    maxWidth: 400,
    margin: "2rem auto",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: 8,
    backgroundColor: "#fafafa",
    fontFamily: "Roboto, sans-serif",
  };
  function check(indextoupdate: number): void {
    const updatelist = list.map((data, index) =>
      indextoupdate === index
        ? { ...data, status: data.status === "done" ? "pending" : "done" }
        : data
    );
    setList(updatelist);
  }
  function deleteItem(indexToDelete : number):void
  {
    const newList = list.filter((_,i)=>(i!= indexToDelete));
    setList(newList);
  }
  function add(): void {
    const newArr = { text: input, status: "pending" };
    setList([...list, newArr]);
    setInput("");
  }
  return (
    <>
      <div style={formContainerStyle}>
        <Typography variant="h4" component={"h1"}>
          To do list
        </Typography>
        <div>
          <TextField
            id="item"
            label="Enter item"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)
            }
          />
          <Button variant="contained" onClick={add} disabled={input === ""}>
            Add
          </Button>
        </div>
        <div>
          <ul>
            {list.map((data, index) => (
              <li key={index} style={{ marginLeft: "10px", textDecoration: data.status=== 'done' ? 'line-through':'none'}}>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  onChange={() => check(index)}
                />
                {data.text}
                <Button variant="contained" onClick={()=>deleteItem(index)} style={{   position: "absolute", marginLeft:"40px"}}>Delete</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
