class Weather {
    constructor({ id, applicable_date, humidity, max_temp, min_temp, the_temp, weather_state_abbr, weather_state_name }) {
        this.id = id;
        this.date = applicable_date
        this.humidity = humidity;
        this.maxTemp = Math.round(max_temp);
        this.minTemp = Math.round(min_temp);
        this.currentTemp = Math.round(the_temp);
        this.image = weather_state_abbr;
        this.weatherName = weather_state_name;
    }

    getImgUrl = () => {
        return `https://www.metaweather.com/static/img/weather/${this.image}.svg`

    }
}

export { Weather }