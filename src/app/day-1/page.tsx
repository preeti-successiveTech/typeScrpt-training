"use client";
import { Button } from "@mui/material";
import Link from "next/link";

export default function day1() {
  return (
    <div>
    <h1>Assignment-1</h1>
  <Button variant="contained"> <Link href="/day-1/Ques-1">  Ques-1</Link></Button>
      <Button variant="contained"> <Link href="/day-1/Ques-2">Ques-2</Link></Button>
    <Button variant="contained"> <Link href="/day-1/Ques-3">Ques-3</Link></Button>
     <Button variant="contained"> <Link href="/day-1/Ques-4">Ques-4</Link></Button>
      <Button variant="contained"> <Link href="/day-1/Ques-5">Ques-5</Link></Button>
          <Button variant="contained"> <Link href="/day-1/Ques-6">Ques-6</Link></Button>
    </div>
      );
}
