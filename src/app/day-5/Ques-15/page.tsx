"use client";
import Hello from "@/components/Hello";
import withLogger from "@/components/WithLogger";

export const HelloWithLogger = withLogger(Hello);

export default function ShowUser() {
  return (
    <>
      <HelloWithLogger />
    </>
  );
}
