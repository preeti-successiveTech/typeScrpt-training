"use client";

import Temperature from "@/components/Temperature";

export default function showTemp()
{
    return(<>
    <Temperature temp = {27} />
     <Temperature temp = {8} />
      <Temperature temp = {14} />
    </>);
}