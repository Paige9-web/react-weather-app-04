export default function Weather() {
  return (
    <div className="weather">
      <form className="mb-3">
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control mb-2"
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>

      <h1>Current location</h1>

      <ul className="list-unstyled">
        <li>Wednesday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          6°C
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy"
          />
        </div>

        <div className="col-6">
          <ul className="list-unstyled">
            <li>Precipitation: 15%</li>
            <li>Humidity: 5%</li>
            <li>Wind: 13km</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
