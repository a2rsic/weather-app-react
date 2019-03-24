import { Forecast } from "../entities/Forecast";

const fetchForecast = (id) => {
    const forecastUrl = `location/${id}/`;
    return fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            return new Forecast(data)
        })
}

export {
    fetchForecast
}