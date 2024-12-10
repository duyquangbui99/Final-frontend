import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutParent from "./pages/About/AboutParent";
import Team from "./pages/About/Team";
import Mission from "./pages/About/Mission";
import Contact from "./pages/Contact";
import ReduxExample from "./pages/ReduxExample";
import WeatherApp from "./pages/WeatherApp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutParent />}>
          {/* Nested Routes for About */}
          <Route path="team" element={<Team />} />
          <Route path="mission" element={<Mission />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/redux" element={<ReduxExample />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </>
  );
}

export default App;
