import React from "react";

function WeatherDisplay({ data }) {
  return (
    <div>
      <span
        style={{
          width: "100px",
          height: "20px",
          backgroundColor: data.temperature <= 20 ? `blue` : `rgb(255, 0, 0)`,
        }}
      ></span>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: data.temperature <= 20 ? `blue` : `rgb(255, 0, 0)`,
        }}
      >
        Temperature: {data.temperature}
      </p>
      <p>Conditions: {data.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
