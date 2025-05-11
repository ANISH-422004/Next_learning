import React, { createContext } from "react";

type Theme = "light" | "dark";

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const themeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // createContext<T>() is a generic function. You are telling TypeScript what type of data the context will hold using <ThemeContextType>.
    // This allows TypeScript to understand the shape of the context value and provide type checking and autocompletion when using the context.

    const [theme, setTheme] = React.useState<Theme>(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme === "dark" ? "dark" : "light";
    });

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    );
};


export const useTheme = () =>{
    const context = React.useContext(themeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}