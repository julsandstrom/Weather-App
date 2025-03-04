import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import WeatherDisplay from "./WeatherDisplay";
import icon from "./icon.png";

function BootstrapLayout() {
  const [showWeather, setShowWeather] = useState(false);
  const [cityName, setCityName] = useState("");
  const [rememberCity, setRememberCity] = useState(false);
  const [favoriteCities, setFavoriteCities] = useState([]);

  useEffect(() => {
    const savedCity = localStorage.getItem("rememberedCity");
    if (savedCity) {
      setCityName(savedCity);
      setRememberCity(true);
    }

    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteCities")) || [];
    setFavoriteCities(storedFavorites.slice(0, 2));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rememberCity) {
      localStorage.setItem("rememberedCity", cityName);
    } else {
      localStorage.removeItem("rememberedCity");
    }

    if (rememberCity && cityName) {
      let updatedFavorites = [...favoriteCities];

      if (!updatedFavorites.includes(cityName)) {
        if (updatedFavorites.length >= 2) {
          updatedFavorites.shift();
        }

        updatedFavorites.push(cityName);

        setFavoriteCities(updatedFavorites);
        localStorage.setItem(
          "favoriteCities",
          JSON.stringify(updatedFavorites)
        );
      }
    }

    setShowWeather(true);
  };

  const newSearch = () => {
    setShowWeather(false);
    if (!rememberCity) {
      setCityName("");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center display-container">
      <div className="text-center border rounded shadow p-4 bg-white display-box">
        <img className="icon-cloud" src={icon} alt="cloud icon" />

        {showWeather ? (
          <WeatherDisplay cityName={cityName} newSearch={newSearch} />
        ) : (
          <SearchForm
            cityName={cityName}
            setCityName={setCityName}
            rememberCity={rememberCity}
            setRememberCity={setRememberCity}
            handleSubmit={handleSubmit}
            favoriteCities={favoriteCities}
          />
        )}
        {/* <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "0",
            right: "0",
            textAlign: "center",
            color: "grey",
          }}
        >
          <small>Weather App - Julian Sandström</small>
        </div> */}
      </div>
    </div>
  );
}

export default BootstrapLayout;
