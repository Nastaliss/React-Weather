import React, { Component } from 'react'
import DailyWeatherForecast from './DailyWeatherForecast';
import './WeeklyWeatherForecast.css'

class WeeklyWeatherForecast extends Component {
    

    dailyWeatherData = this.props.weatherData.map((dayWeatherData, index) => {
        return (
            <DailyWeatherForecast 
                dayWeatherData={dayWeatherData} 
                key={index} 
                index={index}
                className="Weekly"
                daySelected={this.props.daySelected}
            />
        )
    });

  render() {
    return (
      this.dailyWeatherData
    );
  }
}

export default WeeklyWeatherForecast
