import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                <div className="search-container">
                    <h3 className="search-location-title">Search location forecast</h3>
                    <input type="text" id="search-input" autoComplete="off"
                        placeholder="Search city" />
                    <ul className="search-list">
                        <Link to="/location">  <li>
                        </li></Link>
                    </ul>
                </div>
            </div >
            /* <div className="weather-search-location">
                    <input type="text" className="weather-search-input" placeholder="Search city" />
                    <div class="dropdown-content">
                        <Link to="#">Link 1</Link>
                        <Link to="#">Link 2</Link>
                        <Link to="#">Link 3</Link>
                    </div>
                </div> */

        )
    }
}

export {
    SearchLocation
}