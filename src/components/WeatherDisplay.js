import React from "react";

function WeatherDisplay({ data }) {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: data.Temperature <= 20 ? `blue` : `red`,
        }}
      >
        {data.Temperature}
      </p>
      <span>{data.conditions}</span>
    </div>
  );
}

export default WeatherDisplay;
