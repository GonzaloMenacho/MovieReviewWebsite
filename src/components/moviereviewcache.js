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
            movieposts: "",
            reviewposts: ""
        };
    }

    handleMoviePostInputChange(event) {
        this.props.onMoviePostChange(event.target.value);
    }

    handleReviewPostInputChange(event) {
        this.props.onReviewPostChange(event.target.value);
    }

    async componentDidMount() {
        try {
            await client.get('Movies/initialize-cache')
                .then(response => {
                    var data = response.data
                    this.setState({
                        movieposts: JSON.stringify(data.movieDocuments),
                        reviewposts: JSON.stringify(data.reviewDocuments)
                    })
                    localStorage.setItem('MovieDocuments', this.state.movieposts);
                    localStorage.setItem('ReviewDocuments', this.state.reviewposts);
                    //console.log(localStorage.getItem('MovieDocuments'));
                    //console.log(localStorage.getItem('ReviewDocuments'));
                    this.handleMoviePostInputChange({ target: { value: data.movieDocuments } });
                    this.handleReviewPostInputChange({ target: { value: data.reviewDocuments } })
                })
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (<div className="movie-review-cache"></div>);
    }
}

