import React, { Component } from "react";

import "./locationForecast.css";
import * as forecastService from "../../service/forecastService";
import { LocationForecastItem } from "./locationForecastItem";

class LocationForecast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        forecastService.fetchForecast(id)
            .then(location => {
                console.log("loc", location);
                this.setState({
                    location
                })
            })
    }

    displayLocationForecast = (location) => {
        console.log("LOC", location.weather);
        if (location.weather) {
            return location.weather.map((date, key) => {
                return <LocationForecastItem key={date.id} weather={date} />
            })
        }
    }

    render() {
        const { location } = this.state;
        return (
            <div className="location-forecast-container">
                <div className="header">
                    <button className="back-button">
                        <img className="back-image" src="https://cdn3.iconfinder.com/data/icons/user-interface-4-1/32/164-128.png" alt="weather" />
                    </button>
                    <h2 className="forecast-city"><span className="city-name">{location.name}</span> Forecast</h2>
                    <div></div>
                </div>
                <div className="container">
                    {this.displayLocationForecast(location)}
                </div>
            </div>
        )
    }
}

export {
    LocationForecast
}