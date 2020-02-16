import React from "react";
import "./App.css";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./index.css";

const API_KEY = "9db0b3a62f147c8f911dac7c0d7e5615";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    var city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      /*var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var clouds_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();*/

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        error: "Please enter your city"
      });
    }
  };
  render() {
    return (
      <div className="wrapper topWrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
