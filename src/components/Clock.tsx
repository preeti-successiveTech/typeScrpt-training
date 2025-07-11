"use client";

import { useEffect, useState } from "react";

export default function Clock()
{
    const now: string = new Date().toLocaleTimeString();
    const [time, settime] = useState<string>(now);
    useEffect(()=>{
        const t = setInterval(()=>{
            settime(new Date().toLocaleTimeString());
        },1000);
        return ()=> clearInterval(t);
    },[time]);
    return(<>
    <div style={{textAlign: "center", fontWeight: 700}}>
    <p>Clock : {time}</p>
    </div>
    </>);
}