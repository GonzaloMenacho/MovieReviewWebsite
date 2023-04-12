import React, { useState, useEffect } from "react";
import MoviePreview from "./moviepreview";
import Box from "@mui/material/Box";

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
        m: 2,
        width: 300,
        height: 460,
      },
    },
  };

  useEffect(() => {
    const cacheData = localStorage.getItem("MovieDocuments");
    if (cacheData) {
      const parsedData = JSON.parse(cacheData);
      // returns an array of the values of the properties in parsedData
      const movies = Object.values(parsedData).flat();
      setMovies(movies);
    }
  }, []);

  return (
    <>
      <Box sx={styles.container}>
        {movies.map((movie) => (
          <MoviePreview key={movie.movieID} movie={movie} />
      
        ))}
      </Box>
    </>
  );
}

export default MovieReviewList;
