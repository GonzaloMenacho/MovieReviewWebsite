import React, { useState } from 'react';
import axios from 'axios';
import {GetAllButton} from './getbutton';

const client = axios.create({
    baseURL: 'https://localhost:7035/api/',
    header: { 'X-Custom-Header': 'foobar' }
});

class ReviewDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: "",
            err: "",
        };
    }

    addAllReviewsToDisplay = () => {
        console.log("Button Clicked")
        client.get('Movies/getall').then((response) => {
            this.setState({
                posts: response.data
            })
        }).catch(error => {
            this.setState({
                err: error
            })
        });
    }

    render() {
        return (
            <div className="reviews">
                <div className="get-reviews">
                    <GetAllButton onClick={this.addAllReviewsToDisplay}>
                        Get All Reviews
                    </GetAllButton>
                </div>
                <label htmlFor="text">All Reviews</label>

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
}

export default ReviewDisplay;