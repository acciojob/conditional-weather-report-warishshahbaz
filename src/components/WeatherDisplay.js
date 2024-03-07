import React from "react";

function WeatherDisplay({ data }) {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: data.temperature > 20 ? `blue` : `red`,
        }}
      >
        {data.temperature}
      </p>
      <span>{data.conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
