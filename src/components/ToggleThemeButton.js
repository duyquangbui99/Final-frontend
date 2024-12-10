import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: "0.5rem 1rem",
                background: theme === "light" ? "#007bff" : "#555",
                color: theme === "light" ? "#fff" : "#ddd",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
    );
};

export default ToggleThemeButton;
