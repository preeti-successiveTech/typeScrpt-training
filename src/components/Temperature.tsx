"use client";

import { useState } from "react";
interface temperatureProp{
    temp : number
}
export default function Temperature({temp} : temperatureProp)
{
    let msg ="";
    if(temp>25)
    {
        msg ="It is sunny day";
    }
    else if(temp< 10)
    {
        msg = "it is cold day";
    }
    else{
        msg = "Ok ok";
    }
    return(<>
    <div>
    <p>{msg}</p>
    </div>
    </>);
}