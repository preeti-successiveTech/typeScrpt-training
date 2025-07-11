import { Button } from "@mui/material";
import React from "react";

interface ChildProps {
    count: number;
    incrementCount: () => void;
    resetCount: () => void;
}

export default function Child({ count, incrementCount, resetCount }: ChildProps) {
    return (
        <>
            <h2>Child component</h2>
            <p>Count: {count}</p>
            <Button variant="contained" onClick={incrementCount}>Increment Count</Button>
            <Button variant="contained" onClick={resetCount}>Reset Count</Button>
        </>
    );
}
