import axios from "axios";
import React, { useState, useEffect } from "react";
//import some review display component;

const client = axios.create({
    baseURL: "https://localhost:7035/api/",
    header: { "X-Custom-Header": "foobar" },
});

export default class GetMovieReviewCache extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moviereviewcache: ""
        };
    }

    async componentDidMount() {
        try {
            await client.get('Movies/initialize-cache')
                .then(response => {
                    var data = response.data
                    this.setState({
                        moviereviewcache: JSON.stringify(data)
                    })
                    localStorage.setItem('MovieReviewCache', this.state.moviereviewcache);
                    console.log(localStorage.getItem('MovieReviewCache'));
                })
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <div className="movie-review-cache">
            </div>
        );
    }
}