import React, { useState, useContext } from "react";
import { MovieReviewContext } from '../Context/movie-review-context';
import MoviePreview from "./moviepreview";
import Box from "@mui/material/Box";
import NoMovies from "./nomovies";

const styles = {
  container: {
    display: "flex",
    alignItems: "top center",
    height: "25vh",
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

    if (!reviewposts || reviewposts.length === 0) {
        return (<NoMovies />); // if there are no reviews
    }

    if (!movieposts || movieposts.length === 0) {
        return null; // if there are no movieposts
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

{/*
                this.props.movieposts && (
                <div className="results-display">
                    {
                        <div className="results-display">
                            <Box sx={styles.container}>
                                {this.props.movieposts.map((movie) => (
                                    <MoviePreview key={movie.id} movie={movie} />
                                ))}
                            </Box>
                        </div>
                    }
                    {/* <NoMovies></NoMovies> *}
                </div>
            */}

{/* Commented out Michael's movie result display */ }
{/* {this.props.movieposts && (
            <div className="all-movies-display" key="movies">
                {this.props.movieposts.map((post, index) => {
                return (
                    <div className="post-card" key={index}>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-rating">
                        Rating: {post.movieIMDbRating}
                    </p>
                    <p className="post-desc">Description: {post.description}</p>
                    <hr />
                    </div>
                );
                })}
            </div>
            )} */}

{/* Commented out Michael's review result display */ }
{/*  {this.props.reviewposts && (
            <div className="all-reviews-display" key="reviews">
                {this.props.reviewposts.map((moviereviewlist, index) => {
                return (
                    <div key={index}>
                    {moviereviewlist.map((review, i) => {
                        return (
                        <div className="review-card" key={i}>
                            <h3 className="review-title">{review.reviewTitle}</h3>
                          
                        </div>
                        );
                    })}
                    <hr />
                    </div>
                );
                })}
            </div>
            )} */}
