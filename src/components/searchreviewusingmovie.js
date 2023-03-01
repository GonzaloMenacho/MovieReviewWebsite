import React from 'react';
import axios from 'axios';
import ResultsDisplay from './resultsdisplay';

const client = axios.create({
    baseURL: 'https://localhost:7035/api/',
    header: { 'X-Custom-Header': 'foobar' }
});

class SearchBar extends React.Component {
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
        );
    }


    // updates the input field when something is being typed
    changeValue = (event) => {
        this.setState({
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
        });
    }


    // this function returns a list of reviews based on the movieID passed in
    fetchData = async(movieID) =>
    {
        return client.get(`Reviews/GetByID?movieID=${movieID}`)
        .then((response) => {
            //console.log(response.data); // this should be an array of reviews
            return response.data;
        })
    }

}

export default SearchBar;