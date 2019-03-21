import React, { Component } from "react";

import "./SearchLocation.css"

class SearchLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="container-weather-image">
                    <img src="https://www.aweathermoment.com/resources/img/weather-icons/cloudy2.png" alt="weather" className="weather-image" />
                </div>
                <div className="weather-search-location">
                    <input type="text" className="weather-search-input" placeholder="Search city" />
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

            </div>
        )
    }
}

export {
    SearchLocation
}