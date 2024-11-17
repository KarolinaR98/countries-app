import { createContext, FC, ReactNode, useContext, useState } from "react";
import { DarkModeContextType } from "../types";

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

type DarkModeProviderProps = {
    children: ReactNode;
}

export const DarkModeProvider: FC<DarkModeProviderProps> = (props: DarkModeProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }

    return context;
}