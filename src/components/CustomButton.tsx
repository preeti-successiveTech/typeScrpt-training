"use client";

import { Button, Typography } from "@mui/material";

interface ButtonProps
{
    text : string,
    color : string
}
export default function CustomButton({text,color}:ButtonProps)
{
    return(<>
      
      <Button variant="contained" style={{backgroundColor:color}}>{text}</Button>
    </>);
}