import React from "react";

const LocationForecastItem = (props) => {
    const { weather } = props;
    return (
        <div className="forecast-card">
            <p className="forecast-date">{weather.date}</p>
            <p className="forecast-day"><b>{weather.weatherName}</b></p>
            <p className="forecast-day">Humidity: {weather.humidity} %</p>
            <p className="forecast-current-temp">Currently: <span className="current-weather">{weather.currentTemp}°C</span></p>
            <div>
                <img src={weather.imgUrl} alt="icon" className="forecast-icon" />
            </div>
            <div className="forecast-temp">
                <p className="forecast-min-temp"><span className="temp">{weather.maxTemp}°C</span> /{weather.minTemp}°C</p>
            </div>
        </div>
    )

}

export {
    LocationForecastItem
}