"use client";

import { Button } from "@mui/material";
import { useState } from "react";

export default function RandomNumber(){
    const [random, setRandom] = useState<number>(1);
    function generateNumber(): void{
        const newNumber = Math.floor(Math.random() * 100);
        setRandom(newNumber);
    }
    return(<>
    <h1>Number : {random}</h1>
    <Button variant="contained" onClick={generateNumber}>Generate</Button>
    
    </>);
}