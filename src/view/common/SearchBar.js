import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
        }
    }

    onInputChange = (event) => {
        const inputText = event.target.value;
        this.setState({
            inputValue: inputText,
        });

        this.props.onSearch(inputText)
        // console.log(inputText);
    }


    render() {


        return (
            <div className="container" >
                <form className="form-input">
                    <h3 className="search-location-title">Search location forecast</h3>
                    <input onChange={this.onInputChange} value={this.state.inputValue} id="search-input" type="search" placeholder="Search city" autoComplete="off" />
                </form>
            </div>
        )
    }
}

export { SearchBar }

