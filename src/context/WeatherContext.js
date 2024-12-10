import React, { createContext, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (location) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e76897e3afd5273128aada9b0523913e&units=metric`
            );
            setWeather(response.data);
        } catch (err) {
            setError("Failed to fetch weather data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <WeatherContext.Provider value={{ weather, loading, error, fetchWeather }}>
            {children}
        </WeatherContext.Provider>
    );
}
