import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import "./WeatherDisplay.css";

function WeatherDisplay() {
    const { weather, loading, error } = useContext(WeatherContext);

    if (loading) return <p className="weather-loading">Loading...</p>;
    if (error) return <p className="weather-error">{error}</p>;
    if (!weather)
        return <p className="weather-placeholder">Search for a location to view weather data.</p>;

    return (
        <div className="weather-container">
            <h2 className="weather-title">Weather in {weather.name}</h2>
            <p className="weather-info">Temperature: {weather.main.temp}°C</p>
            <p className="weather-info">Condition: {weather.weather[0].description}</p>
        </div>
    );
}

export default WeatherDisplay;
