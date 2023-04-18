import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import RatingScores from "./ratingscores";

function MovieCriteriaAccordian(props) {
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
                    sx={{
                        backgroundColor: 'gray',
                        color: 'white'
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Movie Criteria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <TextField
                            variant="standard"
                            label="Main Stars"
                            value={props.textValues[2]}
                            onChange={(e) => props.handleTextChange(e, 2)}
                            helperText="e.g. Tom Hanks Tom Holland..."
                            sx={{ paddingBottom: 1 }}
                        />
                    </div>
                    <div>
                        <TextField
                            variant="standard"
                            label="Description"
                            value={props.textValues[3]}
                            onChange={(e) => props.handleTextChange(e, 3)}
                            //helperText="e.g"
                            sx={{ paddingBottom: 3 }}
                        />
                    </div>
                    <div>
                        <FormLabel component="legend">Genres</FormLabel>
                        <Typography>
                            <Grid container spacing={0.2}>
                                {props.genre?.map((value, index) => (
                                    <Grid item xs={3} key={index}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={value}
                                                    onChange={props.handleGenreChange(index)}
                                                />
                                            }
                                            label={genreValues[index]}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Typography>
                    </div>
                    <div>
                        <RatingScores
                            minValue={props.minValue}
                            maxValue={props.maxValue}
                            setMinValue={props.setMinValue}
                            setMaxValue={props.setMaxValue}
                            name={props.name}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
export default MovieCriteriaAccordian;