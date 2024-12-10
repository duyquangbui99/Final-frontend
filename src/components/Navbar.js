import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const timeoutRef = useRef(null); // Ref for timeout

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current); // Clear any existing timeout
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200); // Add delay before closing dropdown
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>

                {/* About Dropdown */}
                <div
                    className="dropdown-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/about" className="dropdown-link">
                        About
                    </Link>
                    <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                        <Link to="/about/team">Team</Link>
                        <Link to="/about/mission">Mission</Link>
                    </div>
                </div>

                <Link to="/contact">Contact</Link>
                <Link to="/redux">Redux Example</Link>
                <Link to="/weather">Weather App</Link>
            </div>

            {/* Toggle Theme Button */}
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </nav>
    );
}

export default Navbar;
