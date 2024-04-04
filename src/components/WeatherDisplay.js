// WeatherDisplay.js
import React from "react";

function WeatherDisplay({ weather }) {
  const temperatureStyle = {
    color: weather.temperature > 20 ? "rgb(255, 0, 0)" : "blue",
  };
  const temperatureStyleBG = {
    backgroundColor: weather.temperature > 20 ? "rgb(255, 0, 0)" : "blue",
  };
  return (
    <div>
      <span
        style={{
          backgroundColor: weather.temperature > 20 ? "rgb(255, 0, 0)" : "blue",
          width: "50px",
          height: "50px",
        }}
      ></span>
      <p style={temperatureStyle}>Temperature: {weather.temperature}</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
