import React, { useState, useContext } from "react";
import { MovieReviewContext } from '../Context/movie-review-context';
import MoviePreview from "./moviepreview";
import Box from "@mui/material/Box";
import NoMovies from "./nomovies";
import GroupedMovieReviews from './reviewPrev';


const styles = {
  container: {
    display: "flex",
    alignItems: "top center",
    height: "auto",
    padding: "3%",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: 300,
      height: 460,
    },
    
  },
};

class ResultsDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

    static contextType = MovieReviewContext;

    render()
    {
    const { movieposts, reviewposts } = this.context;

        //console.log(JSON.stringify(movieposts));
        //console.log(JSON.stringify(reviewposts));


        if (JSON.stringify(movieposts) != localStorage.getItem('MovieDocuments')) {
            if (!reviewposts || reviewposts.length === 0) {
                return (<NoMovies />); // if there are no reviews
            }
            if (!movieposts || movieposts.length === 0) {
                return null; // if there are no movieposts
            }
        }


    return (
        
        movieposts &&
        <div className="results-display">
            {
                <div className="results-display">
                    <Box sx={styles.container}>
                        {movieposts.map((movie) => (
                            <MoviePreview key={movie.id} movie={movie} />
                        ))}
                    </Box>

                    
                </div>
            }

        </div>

        
        );
    }
}

export default ResultsDisplay;