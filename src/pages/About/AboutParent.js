import React from "react";
import { Outlet } from "react-router-dom";

function AboutParent() {
    return (
        <div className="about-section">
            <h1>About WeatherApp</h1>
            <p>Learn more about our mission and team.</p>
            <div className="nested-content">
                <Outlet />
            </div>
        </div>
    );
}

export default AboutParent;
