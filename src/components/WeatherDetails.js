function WeatherDetails({ dailyWeather, currentWeather, weatherCode }) {
  const getWeatherCondition = (weatherCode) => {
    if (weatherCode === 0)
      return <span className="weather-icon-text">Clear Sky ☀️</span>;
    if (weatherCode >= 1 && weatherCode <= 3)
      return <span className="weather-icon-text">Partly Cloudy 🌤</span>;
    if (weatherCode >= 45 && weatherCode <= 48)
      return <span className="weather-icon-text">Fog ☁️</span>;
    if (weatherCode >= 51 && weatherCode <= 57)
      return <span className="weather-icon-text">Drizzle 🌦</span>;
    if (weatherCode >= 61 && weatherCode <= 67)
      return <span className="weather-icon-text">Rain 🌧</span>;
    if (weatherCode >= 71 && weatherCode <= 77)
      return <span className="weather-icon-text">Snow 🌨</span>;
    if (weatherCode >= 80 && weatherCode <= 82)
      return <span className="weather-icon-text">Rain Showers 🌦</span>;
    if (weatherCode >= 85 && weatherCode <= 86)
      return <span className="weather-icon-text">Snow Showers 🌨</span>;
    return "Unknown Weather";
  };

  if (weatherCode !== undefined) {
    return (
      <span className="forecast-item-leftside">
        {getWeatherCondition(weatherCode)}
      </span>
    );
  }

  return (
    <div className="current-info">
      <p>
        <span className="current-info-text " style={{ color: "red" }}>
          Low: {dailyWeather.temperature_2m_min[0]} °C
        </span>{" "}
        |
        <span className="current-info-text" style={{ color: "green" }}>
          {" "}
          High: {dailyWeather.temperature_2m_max[0]} °C
        </span>
      </p>
      <p className="current-info-text">
        {getWeatherCondition(currentWeather.weathercode)} | Wind:{" "}
        {currentWeather.windspeed} m/s
      </p>
      <p className="current-info-text">
        Current Temperature: {currentWeather.temperature}°C
      </p>
    </div>
  );
}

export default WeatherDetails;
