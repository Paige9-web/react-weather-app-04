import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo({ weather, formatDate }) {
  return (
    <div className="weather-info">
      <ul className="default-weather">
        <li>{formatDate(weather.date)}</li>
        <li>{weather.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img src={weather.icon} alt={weather.description} />
          <WeatherTemperature celsius={weather.temperature} />
        </div>

        <div className="col-6">
          <ul className="additional-info">
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
