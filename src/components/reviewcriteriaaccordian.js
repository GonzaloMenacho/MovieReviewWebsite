import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RatingScores from "./ratingscores";

function ReviewCriteriaAccordian(props) {
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
                    <Typography>Review Criteria</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <TextField
                            variant="standard"
                            label="Reviewer Username"
                            value={props.textValues[4]}
                            onChange={(e) => props.handleTextChange(e, 4)}
                            helperText="e.g. Top_Dawg_Critic"
                            sx={{ paddingBottom: 1 }}
                        />
                    </div>
                    {/*<div>*/}
                    {/*    <TextField*/}
                    {/*        variant="standard"*/}
                    {/*        label="Usefulness Votes"*/}
                    {/*        value={props.textValues[5]}*/}
                    {/*        onChange={(e) => props.handleTextChange(e, 5)}*/}
                    {/*        //helperText="e.g"*/}
                    {/*        sx={{ paddingBottom: 1 }}*/}
                    {/*    />*/}
                    {/*</div>*/}
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
export default ReviewCriteriaAccordian;