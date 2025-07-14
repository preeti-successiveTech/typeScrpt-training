"use client";

import ShoppingComponent from "@/components/ShoppingComponent";
import CartProvider from "@/context/ShoppingContext";

export default function Shopping()
{
    return(<>
    <CartProvider><ShoppingComponent/></CartProvider>
    </>);
}