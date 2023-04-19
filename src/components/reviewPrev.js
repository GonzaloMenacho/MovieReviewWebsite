import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MovieReviewContext } from '../Context/movie-review-context';
import MovieReviewCard from './moviereviewcard';

class GroupedMovieReviews extends Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      expanded: false,
    };
    */
  }

  static contextType = MovieReviewContext
/*
  handleChange = (panel) => (event, isExpanded) => {
    this.setState({ expanded: isExpanded ? panel : false });
  };
  */

  render() {
    const{ movieposts, reviewposts } = this.context;

    var movies = movieposts;

    if (movies.length === 0 && localStorage.getItem("MovieDocuments"))
    if (movies.length === 0){
        movies = JSON.parse(localStorage.getItem("MovieDocuments"));
    }


    // create a new array to store matching movies
    var matchingMovies = [];
    var reviewMovieIDs = [];

    reviewposts.forEach(reviewArray => {
        reviewMovieIDs.push(reviewArray[0].movieID);
        console.log(reviewArray[0].movieID);
    });

    reviewMovieIDs.forEach(revMovieID => {
        movies.forEach(movie => {
            if (movie.movieID == revMovieID) {
                matchingMovies.push(movie);
            }
        })
    });

    movies = matchingMovies;

    console.log(movies);

    const movieReviewComponents = movies.map((movie,index) => (
        <MovieReviewCard key={index} movie={movie} reviews={reviewposts[index]} />
        ));

    return (
        <div className="movie-review-components">
        {movieReviewComponents}
        </div>   
    );
  }
}

export default GroupedMovieReviews;
