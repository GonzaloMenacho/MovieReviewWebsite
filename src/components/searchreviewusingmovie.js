import React from "react";
import axios from "axios";
import ResultsDisplay from "./resultsdisplay";
import AdvancedBtn from "./advancedbtn";

const client = axios.create({
  baseURL: "https://localhost:7035/api/",
  header: { "X-Custom-Header": "foobar" },
});

class SearchBar extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);

    this.state = {
      searchterm: "",
      movieposts: [],
      reviewposts: [],
    };
  }

  render() {
    return (
      <div className="search">
        <input
          className="search-bar"
          onChange={this.changeValue}
          type="text"
          placeholder="Search a Movie..."
          name="searchbar"
          value={this.state.searchterm}
        />

        <button className="search-button" onClick={this.getReviews}>
          Search
        </button>

        <AdvancedBtn></AdvancedBtn>

        <div className="results">
          <ResultsDisplay
            movieposts={this.state.movieposts}
            reviewposts={this.state.reviewposts}
          />
        </div>
        {/*
                this.state.movieposts &&
                <div className="all-movies-display" key="movies">
                    {this.state.movieposts.map((post, index) => {
                        return (
                            <div className="post-card" key={index}>
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-rating">Rating: {post.movieIMDbRating}</p>
                                <p className="post-desc">Description: {post.description}</p>
                                <hr />
                            </div>
                        );
                    })}
                </div>
                }


                {this.state.reviewposts &&
                    <div className="all-reviews-display" key="reviews">
                        {this.state.reviewposts.map((moviereviewlist, index) => {
                            return (
                                <div key={index}>
                                    {moviereviewlist.map((review, i) => {
                                        return (
                                            <div className="review-card" key={i}>
                                                <h3 className="review-title">{review.reviewTitle}</h3>
                                                <p className="review-body">{review.reviewBody}</p>
                                            </div>
                                        )
                                    })}
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                */}
      </div>
    );
  }

  // updates the input field when something is being typed
  changeValue = (event) => {
    this.setState({
      searchterm: event.target.value,
    });
    console.log(this.state.reviewposts);
  };

  // This function takes the variable in the search term,
  // searches for relevant movies, then searches for relevant reviews.
  // example api route = 'https://localhost:7035/api/Movies/title?m_title=avengers'
  getReviews = () => {
    // Find as many relevant reviews using a Regex search
    client
      .get(`Movies/title?m_title=${this.state.searchterm}`)
      .then((response) => {
        console.log(this.state.searchterm);
        var data = response.data;

        // for each movie, find 10 reviews and save into a list
        // reviewlist = [[reviewlist1], [reviewlist2], [reviewlist3]...[reviewlistN]]
        var reviewlist = [];
        data.forEach(
          // loop through each movie in the movieposts state variable
          (d) => {
            this.fetchData(d.movieID) // grab the response data
              .then((reviewresponse) => {
                //console.log(reviewresponse);  // to see the response
                reviewlist.push(reviewresponse); // add the data to the reviewlist
              });
          }
=======
    constructor(props) {
        super(props);

        this.state = {
            searchterm: "",
            movieposts: [],
            reviewposts: []
        };
    }

    render() {
        return (
            <>
            <div className="search">    
                <div className="search-field">
                    <input
                        className="search-bar"
                        onChange={this.changeValue}
                        type="text"
                        placeholder="Search a Movie..."
                        name="searchbar"
                        value={this.state.searchterm}
                    />

                    <button className="search-button" onClick={this.getReviews}>
                        Search
                    </button>

                    <button className="search-button">Advanced</button>
                </div>
            </div>     
            <div className="results">
               <ResultsDisplay movieposts={this.state.movieposts} reviewposts={this.state.reviewposts} />
            </div>
            </>
>>>>>>> working
        );
        console.log(reviewlist);

        // save the review list to the reviewposts state variable
        this.setState({
<<<<<<< HEAD
          movieposts: data, // save the movie json list into movieposts
          reviewposts: reviewlist,
=======
            searchterm: event.target.value
        });
        //console.log(this.state.reviewposts);
    }


    // This function takes the variable in the search term, 
    // searches for relevant movies, then searches for relevant reviews.
    // example api route = 'https://localhost:7035/api/Movies/title?m_title=avengers'
    getReviews = () => {
        // Find as many relevant reviews using a Regex search
        client.get(`Movies/title?m_title=${this.state.searchterm}`).then((response) => {
            var data = response.data;

            // for each movie, find 10 reviews and save into a list
            // reviewlist = [[reviewlist1], [reviewlist2], [reviewlist3]...[reviewlistN]]
            var reviewlist = [];
            data.forEach(   // loop through each movie in the movieposts state variable
                d => {
                    this.fetchData(d.movieID)   // grab the response data
                        .then((reviewresponse) => {
                            //console.log(reviewresponse);  // to see the response
                            reviewlist.push(reviewresponse);    // add the data to the reviewlist
                        });
                }
            )

            // save the review list to the reviewposts state variable
            this.setState({
                movieposts: data,   // save the movie json list into movieposts
                reviewposts: reviewlist,
            })

            //console.log(reviewlist)
            //console.log(this.state.reviewposts);
>>>>>>> working
        });

        console.log(reviewlist);
        console.log(this.state.reviewposts);
      });
  };

  // this function returns a list of reviews based on the movieID passed in
  fetchData = async (movieID) => {
    return client.get(`Reviews/GetByID?movieID=${movieID}`).then((response) => {
      //console.log(response.data); // this should be an array of reviews
      return response.data;
    });
  };
}

export default SearchBar;
