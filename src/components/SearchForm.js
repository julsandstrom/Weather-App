import React from "react";
import UserLocation from "./UserLocation";
import "./SearchForm.css";

function SearchForm({
  cityName,
  setCityName,
  rememberCity,
  setRememberCity,
  handleSubmit,
  favoriteCities,
}) {
  const capitalizeCityName = (name) => {
    return name
      .split(" ") // Split the name into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleSelectFavoriteCity = (city) => {
    setCityName(city);
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h1-title">Global Window</h1>

      <label htmlFor="cityName" className="sr-only search-header-text">
        Search
      </label>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          id="cityName"
          className="city-input"
          placeholder="City Name"
          required
          value={cityName}
          onChange={(e) => setCityName(capitalizeCityName(e.target.value))}
        />
      </div>

      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={rememberCity}
            onChange={(e) => setRememberCity(e.target.checked)}
          />{" "}
          <small className="remember-text">Remember my city</small>
        </label>
      </div>

      <button type="submit" className="search-button">
        Search
      </button>

      <UserLocation setCityName={setCityName} />

      <div className="favorite-city">
        {favoriteCities.length > 0 && (
          <>
            {favoriteCities.map((city, index) => (
              <button
                key={index}
                className="cool-link favorite-city-button"
                onClick={() => handleSelectFavoriteCity(city)}
              >
                {city}
              </button>
            ))}
          </>
        )}
      </div>
    </form>
  );
}

export default SearchForm;
