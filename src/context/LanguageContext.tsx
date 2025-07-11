"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface LanguageContextProp{
    lang : string;
    langToggle:() => void;
};
const LanguageContext = createContext<LanguageContextProp | undefined>(undefined);
export const useLanguage = ()=>{
    const context  = useContext(LanguageContext);
    if(!context)
    {
     throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
interface LanguageProviderProp{
    children : ReactNode;
}
export default function LanguageProvider({children}:LanguageProviderProp){
    const [lang, setLang] = useState<string>('en');
    const langToggle=(): void=>{
        (lang==='en')?setLang('sp'):setLang('en');
    }
    return(<>
    <LanguageContext.Provider value = {{lang, langToggle}}>{children}</LanguageContext.Provider>
    </>);
}