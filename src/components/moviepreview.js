import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function MoviePreview(props) {
  
  const [showVideo, setShowVideo] = useState(false);
  let timeoutId;
  let url;
  let embedded_url

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setShowVideo(true);
    }, 500); // add delay of 500ms (0.5 seconds)
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowVideo(false);
  };

  return (
    <>
      {/* {props.movieposts.length === 0 && <NoMovies/>} */}
        <Card
          sx={{ 
            width:300, 
            border: "none",
            transform: showVideo ? "scale(1.05)" : "scale(1)", // update scale for card enlargement on hover
            transition: "transform 0.3s ease-in-out" // add transition for smooth animation
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CardActionArea>
            {showVideo ? (
              <CardMedia
                component="iframe"
                width="100%"
                height="180"
                {...url = props.movie.movieTrailer}
                {...embedded_url = url.replace("https://youtu.be/", "https://www.youtube.com/embed/")}
                src={embedded_url}
                title="Trailer"
                muted
                autoPlay
              />
            ) : (
              <CardMedia
                component="img"
                height="460"
                image={props.movie.moviePoster}
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
                    {props.movie.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ paddingLeft: "5px" }}
                  >
                    {props.movie.duration}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={props.movie.movieIMDbRating / 2}
                    readOnly
                    precision={0.1}
                    sx={{ paddingBottom: "10px" }}
                  />
                  <Typography variant="body1">
                  {props.movie.description}
                  </Typography>
                </CardContent>
              </div>
            ) : null}
          </CardActionArea>
        </Card>
    </>
  );
}
