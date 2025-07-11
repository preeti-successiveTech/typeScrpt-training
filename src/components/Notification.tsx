"use client";

import { useEffect, useState } from "react";

export default function Notification()
{
    const [msg, setMsg] = useState<string>("");
   
    useEffect(()=>{
          setMsg("this is a notification");
        const t = setInterval(()=>{
            setMsg("");
        },5000);
        return ()=>
            clearInterval(t);
    },[])
    return(<>
    <div style={{textAlign: "center"}}>{msg}</div>
    </>)
}