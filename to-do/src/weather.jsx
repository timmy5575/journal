// Weather.jsx
import React, { useState, useEffect } from "react";
import "./weather.css";

function Weather() {
  const [load, setLoad] = useState(true);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (load) {
    return (
      <section className="loader">
        <div className="slider" style={{ "--i": 0 }}></div>
        <div className="slider" style={{ "--i": 1 }}></div>
        <div className="slider" style={{ "--i": 2 }}></div>
        <div className="slider" style={{ "--i": 3 }}></div>
        <div className="slider" style={{ "--i": 4 }}></div>
      </section>
    );
  }

  const handleSearch = async () => {
    const apiKey = "76c04b2e2696085e42ffe3f65ca6f688";
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        alert("City not found");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const getEmoji = (main) => {
    switch (main) {
      case "Clear": return "☀️";
      case "Clouds": return "☁️";
      case "Rain": return "🌧";
      case "Snow": return "❄️";
      case "Thunderstorm": return "⛈";
      case "Drizzle": return "🌦";
      default: return "🌍";
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-box">
        <h2>🌤 Weather App</h2>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..." required
        />
        <button onClick={handleSearch}>Search</button>

        {weather && (
          <div className="weather-result">
            <h3 className="lo">{weather.name}, {weather.sys.country}</h3>
            <p className="temp">{Math.round(weather.main.temp)}°C</p>
            <p className="desc">
              {getEmoji(weather.weather[0].main)} {weather.weather[0].description}
            </p>
            <p className="hu">💧 Humidity: {weather.main.humidity}%</p>
            <p className="wi">💨 Wind: {weather.wind.speed} m/s</p>
            <p className="fe">🌡 Feels like: {Math.round(weather.main.feels_like)}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
