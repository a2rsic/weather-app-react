import React, { Component } from "react";

import "./locationForecast.css"

class LocationForecast extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="location-forecast-container">
                <div className="header">
                    <button className="back-button">
                        <img className="back-image" src="https://cdn3.iconfinder.com/data/icons/user-interface-4-1/32/164-128.png" alt="weather" />
                    </button>
                    <h2 className="forecast-city"><span className="city-name"></span></h2>
                    <div></div>
                </div>
                <div className="container">
                    <div className="forecast-card">
                        <p className="forecast-date"></p>
                        <p className="forecast-day"><b></b></p>
                        <p className="forecast-day">Humidity: %</p>
                        <p className="forecast-current-temp">Currently: <span
                            className="current-weather">°C</span></p>
                        <div>
                            <img src="" alt="icon" className="forecast-icon" />
                        </div>
                        <div className="forecast-temp">
                            <p className="forecast-min-temp">
                                <span className="temp">°C
          </span> /°C
        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {
    LocationForecast
}