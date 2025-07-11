"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextProp{
    theme: string;
    toggle : ()=> void
};
const ThemeContext = createContext<ThemeContextProp | undefined>(undefined);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
interface ThemeProvideProp{
    children : ReactNode;
}
export default function ThemeProvider({children}:ThemeProvideProp)
{
    const [theme, setTheme] = useState<string>('Light');
    function toggle():void{
        setTheme((prev) => (prev === 'Light' ? 'Dark' : 'Light'));
    }
    return(<>
    <ThemeContext.Provider value={{theme, toggle}} >{children}</ThemeContext.Provider> 
    </>);
}