import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function MoviePreview(props) {
  const [showVideo, setShowVideo] = useState(false);
  const [open, setOpen] = useState(false);
  let timeoutId;
  let url;
  let embedded_url;

  function convertMinutesToHoursAndMinutes(minutes) {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    return hours + " hours " + remainingMinutes + " minutes";
  }

  function mainStars(mainStars) {
    const mainStarsString = props.movie.mainStars.join(", ");
    return mainStarsString;
  }

  function genres(genres) {
    const genreString = props.movie.movieGenres.join(", ");
    return genreString;
  }

  function directors(directors) {
    const directorsString = props.movie.directors.join(", ");
    return directorsString;
  }

  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setShowVideo(true);
    }, 500); // add delay of 500ms (0.5 seconds)
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setShowVideo(false);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* {props.movieposts.length === 0 && <NoMovies/>} */}
      <Card
        sx={{
          width: 300,
          border: "none",
          transform: showVideo ? "scale(1.05)" : "scale(1)", // update scale for card enlargement on hover
          transition: "transform 0.3s ease-in-out", // add transition for smooth animation
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardActionArea sx={{ minHeight: "460px" }} onClick={handleDialogOpen}>
          {showVideo ? (
            <CardMedia
              component="iframe"
              width="100%"
              height="180"
              {...(url = props.movie.movieTrailer)}
              {...(embedded_url = url.replace(
                "https://youtu.be/",
                "https://www.youtube.com/embed/"
              ))}
              src={embedded_url}
              title="Trailer"
              muted
              autoPlay
              sx={{ position: "absolute", top: 0 }}
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
                  sx={{ paddingLeft: "5px", marginTop: "150px" }}
                >
                  {props.movie.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ paddingLeft: "5px"}}
                >
                  {convertMinutesToHoursAndMinutes(props.movie.duration)}
                </Typography>
                <Rating
                  name="read-only"
                  value={props.movie.movieIMDbRating / 2}
                  readOnly
                  precision={0.1}
                  sx={{ paddingBottom: "10px" }}
                />
                <Typography variant="body1" sx={{ paddingLeft: "5px"}}>
                  Genre(s)
                  {": " + genres()}
                </Typography>
                <Typography
                  variant="body3"
                  sx={{ position: "absolute", bottom: "10px", left: "50%" }}
                >
                  Click for more details...
                </Typography>
              </CardContent>
            </div>
          ) : null}
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle
          sx={{
            typography: {
              fontSize: "36px"
            },
          }}
        >
          {props.movie.title}
        </DialogTitle>
        <CardMedia
          component="iframe"
          {...(url = props.movie.movieTrailer)}
          {...(embedded_url = url.replace(
            "https://youtu.be/",
            "https://www.youtube.com/embed/"
          ))}
          src={embedded_url}
          title="Trailer"
          muted
          autoPlay
          height="350px"
        />
        <DialogContent>
          <DialogContentText>{props.movie.description}</DialogContentText>
        </DialogContent>
        <DialogTitle
          sx={{
            typography: {
              fontSize: "24px",
            },
          }}
        >
          IMDbRating {": " + props.movie.movieIMDbRating}
        </DialogTitle>
        <DialogTitle
          sx={{
            typography: {
              fontSize: "24px",
            },
          }}
        >
          Metacritic Score {": " + props.movie.metaScore}
        </DialogTitle>
        <DialogTitle
          sx={{
            typography: {
              fontSize: "18px",
            },
          }}
        >
          Director(s) {": " + directors()}
        </DialogTitle>
        <DialogTitle
          sx={{
            typography: {
              fontSize: "18px",
            },
          }}
        >
          Main Stars {": " + mainStars()}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
