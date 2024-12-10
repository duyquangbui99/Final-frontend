import React, { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

// ThemeProvider component to wrap the application
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light"); // Default theme is 'light'

    // Toggle theme function
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // Context value containing the theme and toggle function
    const contextValue = {
        theme,
        toggleTheme,
    };

    // Style to apply the theme dynamically
    const appStyle = {
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        transition: "background-color 0.3s, color 0.3s",
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <div style={appStyle}>{children}</div>
        </ThemeContext.Provider>
    );
}
