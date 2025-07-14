"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function LanguageSwitcher()
{
    const {lang,langToggle} = useLanguage();
    const [msg, setMsg] = useState<string>('Hii In English');
    useEffect(()=>{
        if(lang==='en')
    {
        setMsg('Hii In English');
    }
    else{
        setMsg('Hola en español');
    }
    },[lang]);
    

    return(<>
    <div>
        <h1>Language Switcher</h1>
        <h2>{msg}</h2>
        <Button variant="contained" onClick={langToggle}>Change Language</Button>
    </div>
    </>);
}