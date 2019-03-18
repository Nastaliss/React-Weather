import React, { Component } from "react";
import WeeklyWeatherForecast from "./WeatherForecast/WeeklyWeatherForecast";

class App extends Component {
    state = {
        fakeData: [
            {
                temperatureCelsius: 15,
                weather: 'cloudy',
                windSpeedKph: 0,
                selected: true,
            },
            {
                temperatureCelsius: 18,
                weather: 'cloudy',
                windSpeedKph: 0,
                selected: false,
            },
            {
                temperatureCelsius: 11,
                weather: 'cloudy',
                windSpeedKph: 0,
                selected: false,
            },
            {
                temperatureCelsius: 17,
                weather: 'cloudy',
                windSpeedKph: 0,
                selected: false,
            },
            {
                temperatureCelsius: 19,
                weather: 'cloudy',
                windSpeedKph: 0,
                selected: false,
            },
        ]
    }

    

    daySelected = (selectedDay) => {
        // for (const day of this.fakeData) {
        //     day.selected = (day === selectedDay ? true : false);
        // }
        this.setState({ fakeData: this.state.fakeData.map( day => {
            console.log(day);
            if(day === selectedDay) {
                day.selected = true;
            }
            else {
                day.selected = false;
            }
            return day;
        }
        )})
    };

    getStyle = () => {
        return {
            display: 'flex',
            flexDirection: 'row',
        }
    }

  render() {
      
    return (
      <div style={this.getStyle()}>
        <WeeklyWeatherForecast 
            weatherData={this.state.fakeData} 
            daySelected={this.daySelected}
        />
      </div>
    );
  }
}

export default App;
