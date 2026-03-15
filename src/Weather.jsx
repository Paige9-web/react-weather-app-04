import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

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
      date: new Date(weatherResponse.data.time * 1000),
      description: weatherResponse.data.condition.description,
      humidity: weatherResponse.data.temperature.humidity,
      wind: weatherResponse.data.wind.speed,
      icon: weatherResponse.data.condition.icon_url,
    });
  };

  function formatDate(date) {
    return date.toLocaleString("en-GB", {
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

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

      {weather && <WeatherInfo weather={weather} formatDate={formatDate} />}
    </div>
  );
}
