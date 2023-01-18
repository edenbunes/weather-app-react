import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  if (props.icon) {
    return (
      <ul>
        <li>Temperature: {props.temperature}℃</li>
        <li>Description: {props.description}</li>
        <li>Humidity: {props.humidity}%</li>
        <li>Wind: {props.wind} km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt={props.description}
          />
        </li>
      </ul>
    );
  }
}
