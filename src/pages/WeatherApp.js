import React from "react";
import Weather from "../components/WeatherAppItems/Weather.js";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Weather defaultCity="London" />
    </div>
  );
}
