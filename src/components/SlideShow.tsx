"use client";

import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function SlideShow() {
  const [current, setCurrent] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const [status, setStatus] = useState<boolean>(true);

  const arr: string[] = [
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg",
    "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
    "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg",
  ];

  function pause(): void {
    setStatus(!status);
  }

  useEffect(() => {
    if (status) {
      const t = setInterval(() => {
        if (current < arr.length - 1) {
          setCurrent(current + 1);
        } else {
          setCurrent(0);
        }
      }, parseInt(input) * 1000 || 1000);
      return () => clearInterval(t);
    }
  });

  return (
    <>
      <div
        style={{
          width: 420,
          height: "auto",
          margin: "2rem auto",
          padding: "1.5rem",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#f0f0f0",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          textAlign: "center",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <img
          src={arr[current]}
          style={{
            width: "100%",
            maxWidth: 400,
            height: 400,
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        />
        <div style={{ marginBottom: "1rem" }}>
          <TextField
            label="Enter time interval"
            variant="outlined"
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginRight: "1rem", width: 180 }}
          />
          <Button variant="contained" onClick={pause}>
            {status ? "pause" : "play"}
          </Button>
        </div>
      </div>
    </>
  );
}
