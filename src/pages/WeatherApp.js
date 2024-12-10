import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styled from "styled-components";
import WeatherDisplay from "../components/WeatherDisplay";
import "./WeatherApp.css";

const SearchBar = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;

function WeatherApp() {
    const [location, setLocation] = useState("");
    const { fetchWeather } = useContext(WeatherContext);

    const handleSearch = () => {
        if (location) fetchWeather(location);
    };

    return (
        <div className="weather-app-container">
            <h1 className="weather-app-title">Weather App</h1>
            <div className="search-container">
                <SearchBar
                    type="text"
                    placeholder="Enter a location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <WeatherDisplay />
        </div>
    );
}

export default WeatherApp;
