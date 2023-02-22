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
            title: "",
            rating: "",
            description: "",
            posts: ""
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
                    <button onClick={this.getReview}>
                        Get Results
                    </button>
                </div>
                {this.state.posts &&
                    <div className="all-reviews-display">
                        {this.state.posts.map((post) => {
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
            </div>              
        );
    }

    changeValue = (event) => {
        this.setState({
            searchterm: event.target.value
        });
    }

    //'https://localhost:7035/api/Movies/title?m_title=avengers'
    getReview = () => {
        client.get(`Movies/title?m_title=${this.state.searchterm}`).then((response) => {
            this.setState({
                posts: response.data,
            })
        });
    }

}

export default SearchBar;