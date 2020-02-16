import React from "react";

//Почитай про spread-операторы и впредь используй их, приучая юзеров использовать es6. Потому что то, что ты сделал в 7 строк делается строкой {...state}
//<Weather {...state} />

const Weather = props => (
  <div>
    {props.city && (
      <div className="infoWeath">
        <p>
          {" "}
          City: {props.city}, {props.country}
        </p>
        <p> Temperature: {Math.floor(props.temp)}°C</p>
        <p> Pressure: {props.pressure}hPa</p>
        <p> It's a nice day today, isn't it?</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);
export default Weather;
