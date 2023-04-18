import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function ReviewCriteriaAccordian({ textValues, handleTextChange }) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
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
                            value={textValues[4]}
                            onChange={(e) => handleTextChange(e, 4)}
                            helperText="e.g. Top_Dawg_Critic"
                            sx={{ paddingBottom: 1 }}
                        />
                    </div>
                    <div>
                        <TextField
                            variant="standard"
                            label="Usefulness Votes"
                            value={textValues[5]}
                            onChange={(e) => handleTextChange(e, 5)}
                            //helperText="e.g"
                            sx={{ paddingBottom: 1 }}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
export default ReviewCriteriaAccordian;