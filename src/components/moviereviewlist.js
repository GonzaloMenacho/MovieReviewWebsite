import React, { useState, useEffect } from "react";
import MoviePreview from "./moviepreview";
import Box from "@mui/material/Box";
import GetMovieReviewCache from "./moviereviewcache";

function MovieReviewList() {
  const [movies, setMovies] = useState([]);

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

  useEffect(() => {
    const cacheData = localStorage.getItem("MovieReviewCache");
    console.log(cacheData)
    if (cacheData) {
      const parsedData = JSON.parse(cacheData);
      // returns an array of the values of the properties in parsedData
      const reviewsArray = Object.values(parsedData).flat();
      console.log(reviewsArray); //  flat flattens this array of arrays into a single array
      setMovies(reviewsArray);
    }
  }, []);

  return (
    <>
      <Box sx={styles.container}>
        {movies.map((movie) => (
          <MoviePreview key={movie.id} movie={movie} />
        ))}
      </Box>
    </>
  );
}

export default MovieReviewList;
