import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as locationService from "../../service/locationService";

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
                console.log("res", locations)
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

    // handleFilter = (searchInput) => {
    //     console.log("input", searchInput);
    //     const filteredLocations = this.state.locations.filter(location => {
    //         return location.name.toLowerCase().includes(searchInput.toLowerCase())
    //     })
    //     this.setState({
    //         filteredLocations
    //     })
    // }

    displayLocations = (locations) => {
        const locationList = locations.map((location, key) => {
            return <Link to={`/location/${location.id}`} key={location.id}><li>{location.name}</li></Link>
        })
        return locationList;
    }

    render() {
        const { locations } = this.state;
        return (
            <div className="container">
                <div className="container-weather-image">
                    <img src="https://www.aweathermoment.com/resources/img/weather-icons/cloudy2.png" alt="weather" className="weather-image" />
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