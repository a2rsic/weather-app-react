import { Weather } from "./Weather";

class Forecast {
    constructor({ woeid, title, consolidated_weather }) {
        this.id = woeid;
        this.name = title;
        this.weather = consolidated_weather.map(data => {
            return new Weather(data)
        })
    }
}

export { Forecast }