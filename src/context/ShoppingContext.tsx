"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface CartProp{
id : number;
img : string;
count : number;
price : number;
};

interface shoppingContextProp{
    Add : (items:CartProp)=>void;
    remove : (idToRemove: number)=>void;
    cart : CartProp[];
    totalPrice : number;
}
const ShoppingContext = createContext<shoppingContextProp | undefined>(undefined);
export const useCart = ()=>{
    const context = useContext(ShoppingContext);
    if(!context)
    {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
return context;
}
interface CartProviderProp{
    children : ReactNode;
}
export default function CartProvider({children}:CartProviderProp)
{
    const [cart, setCart] = useState<CartProp[]>([]);
    function Add(items: CartProp)
    {
        const existing = cart.find((item)=>item.id === items.id);
        if(existing)
        {
            setCart((prev)=>prev.map((data)=>(data.id===items.id)? {...data, count:data.count+1}:data));
        }
        else{
            const newCart : CartProp= {...items, count:1};
            setCart((prev)=>[...prev,newCart]);
        }
    }
   function remove(idToRemove: number) {
  setCart((prev) => 
    prev
      .map(item => 
        item.id === idToRemove 
          ? { ...item, count: item.count - 1 }  // decrease count
          : item
      )
      .filter(item => item.count > 0) // remove if count becomes 0 or less
  );
}
    const totalPrice = cart.reduce((sum, item)=>sum+item.price * item.count, 0)
    return(<>
    <ShoppingContext.Provider value={{cart,Add, remove, totalPrice}}>
        {children}
    </ShoppingContext.Provider>
    </>);
}