import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import NoMovies from "./nomovies";

export default function MoviePreview() {
  const [showVideo, setShowVideo] = useState(false);
  const movies = [];
  let timeoutId;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setShowVideo(true);
    }, 1000); // add delay of 500ms (0.5 seconds)
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowVideo(false);
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "top center",
      height: "25vh",
      padding: "3%",
      flexWrap: "wrap",
      "& > :not(style)": {
        m: 1,
        width: 300,
        height: 460,
      },
      "&:hover": {
        transform: "scale(1.1)",
        transition: "transform 0.5s ease-in-out", // add transition for transform property
      },
      transition: "transform 0.5s ease-in-out", // add transition for transform property outside of &:hover selector
    },
  };

  return (
    <>
      {movies.length === 0 && <NoMovies/>}
      <Box sx={styles.container}>
        <Card
          sx={{ maxWidth: 300, border: "none" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CardActionArea>
            {showVideo ? (
              <CardMedia
                component="iframe"
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1"
                title="Trailer"
                autoplay
                muted
              />
            ) : (
              <CardMedia
                component="img"
                height="460"
                image="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                alt="poster"
              />
            )}
            {showVideo ? (
              <div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ paddingLeft: "5px" }}
                  >
                    Avengers Endgame
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ paddingLeft: "5px" }}
                  >
                    PG-13
                  </Typography>
                  <Rating
                    name="read-only"
                    value={4.2}
                    readOnly
                    precision={0.1}
                    sx={{ paddingBottom: "10px" }}
                  />
                  <Typography variant="body1">
                    After the devastating events of Avengers: Infinity War
                    (2018), the universe is in ruins. With the help of remaining
                    allies, the Avengers assemble once more in order to reverse
                    Thanos' actions.
                  </Typography>
                </CardContent>
              </div>
            ) : null}
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
}
// import React, { useEffect, useState } from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { getMovieReviewCache } from './moviereviewcache';

// const MovieReviews = () => {
//   const [movieReviews, setMovieReviews] = useState([]);

//   useEffect(() => {
//     async function fetchMovieReviews() {
//       const data = await getMovieReviewCache();
//       setMovieReviews(Object.entries(data)); // convert the object into an array of key-value pairs
//     }
//     fetchMovieReviews();
//   }, []);

//   return (
//     <div>
//       {movieReviews.map(([movieId, review]) => (
//         <Card key={movieId}>
//           <CardContent>
//             <Typography variant="h5"></Typography>
//             <Typography variant="subtitle1">{review.author}</Typography>
//             <Typography variant="body1">{review.content}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default MovieReviews;
