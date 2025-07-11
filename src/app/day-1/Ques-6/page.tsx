"use client";

import CustomButton from "@/components/CustomButton";
import { Typography } from "@mui/material";

export default function showButton()
{
    return(<>
    <Typography variant="h4" component="h1" gutterBottom>
        Button Component
      </Typography>
    <CustomButton text = "Button1" color="red"/>
    <CustomButton text = "Button2" color="yellow"/>
    <CustomButton text = "Button3" color="green"/>
    </>);
}