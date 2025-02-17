import React, { useState, useContext } from "react";
import { MovieReviewContext } from "../Context/movie-review-context";
import axios from "axios";
import ResultsDisplay from "./resultsdisplay";

const client = axios.create({
    baseURL: "https://localhost:7035/api/",
  header: { "X-Custom-Header": "foobar" },
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchterm: "",
    };
  }

  handleMoviePostInputChange(event) {
    this.props.onMoviePostChange(event.target.value);
  }

  handleReviewPostInputChange(event) {
    this.props.onReviewPostChange(event.target.value);
    }


  // updates the input field when something is being typed
  changeValue = (event) => {
    this.setState({
      searchterm: event.target.value
    });
    //console.log(this.state.reviewposts);
  }


  // This function takes the variable in the search term,
  // searches for relevant movies and reviews.
  // example api route = 'https://localhost:7035/api/Movies/search?term=avengers'
  getReviews = async () => {
    // Find as many relevant reviews using a Regex search
    try {
      await client.get(`Movies/search?term=${this.state.searchterm}`).then((response) => {
          var data = response.data;
          //console.log(JSON.stringify(data.movieDocuments));
          //console.log(JSON.stringify(data.reviewDocuments));

          this.handleMoviePostInputChange({ target: { value: data.movieDocuments } });
          this.handleReviewPostInputChange({ target: { value: data.reviewDocuments } });
        });
    } catch (error) {
      console.log(error);
    }

  }

  
  render() {
    return (
      <>
        <div className="search">
          <div className="search-field">
            <input
            className="search-bar"
            onChange={this.changeValue}
            onKeyDown={(event) => {
                if (event.key == "Enter") {
                    this.props.onSearchButtonClick(); // set carousel to false
                    this.getReviews();
                }
            }}
            type="text"
            placeholder="Search a Movie..."
            name="searchbar"
            value={this.state.searchterm}
            style={{ borderRadius: "100px" }}
            />

            <button
              className="search-button"
              onClick={() => {
                this.props.onSearchButtonClick(); // set carousel to false
                this.getReviews();
              }}
            >
              Search
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
