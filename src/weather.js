import { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apikey = "470c09f57bd9o90adc47e3t0cd74b0fc";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;

    const weatherResponse = await axios.get(weatherUrl);

    setWeather({
      temperature: Math.round(weatherResponse.data.temperature.current),
      description: weatherResponse.data.condition.description,
      humidity: weatherResponse.data.temperature.humidity,
      wind: weatherResponse.data.wind.speed,
      icon: weatherResponse.data.condition.icon_url,
    });
  };

  return (
    <div className="weather">
      <form className="mb-3" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control mb-2"
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>

      {weather && (
        <>
          <h1>{city}</h1>

          <ul className="default-weather">
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
        </>
      )}
    </div>
  );
}
