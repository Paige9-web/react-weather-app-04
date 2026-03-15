import React from "react";

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
          <span className="temperature">{weather.temperature}</span>
          <span className="unit">°C</span>
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
