import React from 'react';
import axios from 'axios';
import './style.css';
const client = axios.create({
    baseURL: 'https://localhost:7035/api/',
    header: { 'X-Custom-Header': 'foobar' }
});

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchterm: "",
            movieposts: "",
            reviewposts: ""
        };
    }

    render() {
        return (
            <div className="search">

                <div id="search-bar">
                    <input onChange={this.changeValue}
                        type="text" placeholder="Search a Movie or Review..." value={this.state.searchterm} />
                </div>

                <div className="search-button">
                    <button onClick={this.getReviews}>
                        Get Results
                    </button>
                </div>

                {this.state.movieposts &&
                    <div className="all-movies-display">
                        {this.state.movieposts.map((post) => {
                            return (
                                <div className="post-card" key={post.movieID}>
                                    <h2 className="post-title">{post.title}</h2>
                                    <p className="post-rating">Rating: {post.movieIMDbRating}</p>
                                    <p className="post-desc">Description: {post.description}</p>
                                </div>
                            );
                        })}
                    </div>
                }

                {this.state.reviewposts &&
                    <div className="all-reviews-display">
                        {this.state.reviewposts.map((moviepost) => {
                            return (
                                <div className="movie">
                                    <div className="post-card" key={moviepost.movieID}>
                                        <h2 className="post-title">{moviepost.reviewTitle}</h2>
                                        <p className="post-rating">Rating: {moviepost.reviewBody}</p>
                                    </div>
                                    
                                    {/*moviepost.map((post) => {
                                        return (
                                            <div className="post-card" key={post.movieID}>
                                                <h2 className="post-title">{post.reviewTitle}</h2>
                                                <p className="post-rating">Rating: {post.reviewBody}</p>
                                            </div>
                                        );
                                    })*/}
                                <hr />
                                </div>
                            );
                        })}
                    </div>
                }
            </div>              
        );
    }

    changeValue = (event) => {
        this.setState({
            searchterm: event.target.value
        });
    }

    //'https://localhost:7035/api/Movies/title?m_title=avengers'
    getReviews = () => {
        client.get(`Movies/title?m_title=${this.state.searchterm}`).then((response) => {
            var data = response.data;
            this.setState({
                movieposts: data,
            })

            var reviewlist = [];
            data.forEach(
                d => reviewlist.push(client.get(`Reviews/GetByID?movieID=${d.movieID}`).then((response) => {
                        console.log(response.data)
                        return response.data;
                    })
                )
            )

            this.setState({
                reviewposts: reviewlist,
            })
        });

        //console.log(this.state.reviewposts);
    }

}

export default SearchBar;