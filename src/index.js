import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext";
import { WeatherProvider } from "./context/WeatherContext";
import store from "./redux/store";
import App from "./App";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <WeatherProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WeatherProvider>
    </ThemeProvider>
  </Provider>
);
