function WeatherHeader({ cityName, date }) {
  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    return `${day} ${month}`;
  };

  return (
    <div>
      <h2 className="city-header">{cityName}</h2>
      <h6 className="city-current-date">
        {date ? date : getCurrentDate()}
      </h6>{" "}
    </div>
  );
}

export default WeatherHeader;
