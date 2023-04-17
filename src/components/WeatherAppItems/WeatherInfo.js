import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h2>{props.data.city}</h2>
      <div className="temp-info">
        <div className="one">
          <h3>
            <FormattedDate date={props.data.date} />
          </h3>
          <h4 className="capitalise">{props.data.description}</h4>
          <div className="temp-number">
            <div className="img">
              <WeatherIcon code={props.data.icon} />
              <WeatherTemperature
                celsius={props.data.temp}
                className="unit temperature"
              />
            </div>
          </div>
        </div>
        <div className="two">
          <ul>
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {props.data.wind}km/h
            </li>
            <li>
              <strong>Feels Like:</strong> {props.data.feelsLike}℃
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
