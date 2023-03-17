import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";

function ContentRatingCheckBoxes({
  contentRating,
  handleContentRatingChange,
  genre,
  handleGenreChange,
}) {
  const ratingValues = [
    "G",
    "PG",
    "PG-13",
    "R",
    "NC-17",
    "Not Rated",
    "Unrated",
  ];

  const genreValues = [
    "Action",
    "Horror",
    "Romance",
    "Drama",
    "Thriller",
    "Comedy",
  ];
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Content Rating</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid container spacing={2}>
              {contentRating.map((value, index) => (
                <Grid item xs={6} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={value}
                        onChange={handleContentRatingChange(index)}
                      />
                    }
                    label={ratingValues[index]}
                  />
                </Grid>
              ))}
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Genre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid container spacing={2}>
              {genre.map((value, index) => (
                <Grid item xs={6} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={value}
                        onChange={handleGenreChange(index)}
                      />
                    }
                    label={genreValues[index]}
                  />
                </Grid>
              ))}
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}

export default ContentRatingCheckBoxes;
