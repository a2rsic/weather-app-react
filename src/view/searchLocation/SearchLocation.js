import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as locationService from "../../service/locationService";
import weather from "../images/weather-icon.png";

import "./SearchLocation.css"

class SearchLocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: [],
            searchInput: ""
        }
    }

    fetchSearchLocation = (input) => {
        locationService.fetchLocation(input)
            .then(locations => {
                this.setState({
                    locations,
                })
            })
    }

    handleChangeSearchInput = (e) => {
        const input = e.target.value;

        if (input) {
            this.fetchSearchLocation(input)
            this.setState({
                searchInput: input
            })
        } else {
            this.setState({
                searchInput: ""
            })
        }
    }

    displayLocations = (locations) => {
        const locationList = locations.map((location, key) => {
            return <Link to={`/location/${location.id}`} className="search-link" key={location.id}><li className="location-list">{location.name}</li></Link>
        })
        return locationList;
    }

    render() {
        const { locations } = this.state;
        return (
            <div className="container-search-location">
                <div className="container-weather-image">
                    <img src={weather} alt="weather" className="weather-image" />
                </div>
                <div className="search-container">
                    <input onChange={this.handleChangeSearchInput} value={this.state.searchInput} type="text" id="search-input"
                        placeholder="Search city" autoComplete="off" />
                    <ul className="search-list">
                        {this.displayLocations(locations)}
                    </ul>
                </div>
            </div >
        )
    }
}

export {
    SearchLocation
}