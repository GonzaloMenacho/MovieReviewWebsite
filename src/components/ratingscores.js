import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function RatingScores(props) {
  const handleMinRatingChange = (event, value) => {
    if (value > props.maxValue) {
      value = props.maxValue;
    }
    props.setMinValue(value);
  };

  const handleMaxRatingChange = (event, value) => {
    if (value < props.minValue) {
      value = props.minValue;
    }
    props.setMaxValue(value);
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Rating Score</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Typography component="legend">Minimum Rating</Typography>
            <Stack spacing={1}>
              <Rating
                name="min-rating"
                value={props.minValue}
                onChange={handleMinRatingChange}
                precision={0.5}
              />
              <Typography component="legend">Maximum Rating</Typography>
              <Rating
                name="max-rating"
                value={props.maxValue}
                onChange={handleMaxRatingChange}
                precision={0.5}
              />
            </Stack>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
export default RatingScores;
