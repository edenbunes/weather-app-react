import React, { useState } from "react";

import axios from "axios";
import Forecast from "./Forecast";

export default function Search() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function displayWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  function callApi(event) {
    event.preventDefault();
    let apiKey = "33fd04d85cdb641fd1bc55ca0162ba48";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }
  return (
    <div>
      <form className="Search" onSubmit={callApi}>
        <input
          type="Search"
          onChange={handleCity}
          placeholder="Enter a city..."
        />
        <input type="Submit" value="Search" />
      </form>
      <Forecast
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
    </div>
  );
}
