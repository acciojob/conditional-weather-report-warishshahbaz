import React, { useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  let data = { temperature: "25", conditions: "Sunny" };
  return (
    <div>
      <WeatherDisplay data={data} />
    </div>
  );
};

export default App;
