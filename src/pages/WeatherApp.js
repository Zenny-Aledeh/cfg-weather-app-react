import React from "react";
import Weather from "../components/WeatherAppItems/Weather.js";

export default function WeatherApp() {
  return (
    <div className="container">
      <Weather defaultCity="London" />
    </div>
  );
}
