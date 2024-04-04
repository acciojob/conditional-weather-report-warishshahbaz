// App.js
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    conditions: "",
  });

  useEffect(() => {
    // Fetch weather data from API or use default values
    const defaultWeatherData = { temperature: 25, conditions: "Sunny" };
    setWeatherData(defaultWeatherData);
  }, []);

  return (
    <div className="App">
      <WeatherDisplay weather={weatherData} />
    </div>
  );
}

export default App;
