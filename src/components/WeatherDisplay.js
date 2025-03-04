import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";

function WeatherDisplay({ cityName, newSearch }) {
  const [showNextFiveDays, setShowNextFiveDays] = useState(false);

  const toggleNextFiveDays = () => {
    setShowNextFiveDays(!showNextFiveDays);
  };

  return (
    <div>
      <CurrentWeather cityName={cityName} showNextFiveDays={showNextFiveDays} />
      <button className="new-search-button " onClick={newSearch}>
        New Search
      </button>
      <button
        className="new-search-button new-search-button-space"
        onClick={toggleNextFiveDays}
      >
        {showNextFiveDays ? "Show Current Weather" : "Next 5 Days"}
      </button>
    </div>
  );
}

export default WeatherDisplay;
