import React from "react";

function WeatherDisplay({ data }) {
  return (
    <div>
      <span
        style={{
          width: "100px",
          height: "20px",
          backgroundColor: data.Temperature <= 20 ? `blue` : `red`,
        }}
      ></span>
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: data.Temperature <= 20 ? `blue` : `red`,
        }}
      >
        {data.Temperature}
      </p>
      <p>{data.Conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
