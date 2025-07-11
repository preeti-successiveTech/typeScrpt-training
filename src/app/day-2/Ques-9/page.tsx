"use client";

import { useTheme } from "@/context/ThemeContext";
import { Button } from "@mui/material";

export default function ShowTheme()
{
    const {theme, toggle} = useTheme();
    const stylePage={
        backgroundColor: (theme === 'Dark') ? 'Black' : 'white',
        color: (theme === 'Dark') ? 'white' : 'Black',
        height: "100vh",
    }
    return(<>
    <div style={stylePage}>
    <Button variant="contained" onClick={toggle}>Toggle</Button>
   </div>
    </>)
}