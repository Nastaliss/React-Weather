import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DailyWeatherForecast extends Component {

    getStyle = () => {
        console.log("style");
        return {
            margin: "10px",
            padding: "10px",
            outline: "1px solid",
            outlineColor: this.props.dayWeatherData.selected ? "red" : "grey",
            cursor: "pointer",
        }
    }

    componentDidUpdate() {
        console.log("UPDATE",this.props.dayWeatherData)
    }

    
    render() {
        const { dayWeatherData, index, selected } = this.props;
        return(
            <div style={this.getStyle()} onClick={this.props.daySelected.bind(this, dayWeatherData)}>
                {'Day ' + index} 
                {selected}
            </div>
        ) 
    }
}
DailyWeatherForecast.propTypes = {
    index: PropTypes.number.isRequired,
    dayWeatherData: PropTypes.object.isRequired,
}

export default DailyWeatherForecast 