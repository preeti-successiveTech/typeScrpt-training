"use client";

import { Button } from "@mui/material";
import { useState } from "react";

export default function Counter(){
    const [count, setCount ] = useState<number>(0);
    function increment():void{
        setCount(count+1);
    }
    function decrement():void{
        setCount(count-1);
    }
    return(<>
    <div>
        <h1>Count : {count}</h1>
        <Button variant="contained" onClick={increment}>Increment</Button>
        <Button variant="contained" onClick={decrement}>Decrement</Button>
    </div>
    </>);
}