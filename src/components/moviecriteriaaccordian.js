import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MovieCriteriaAccordian(props) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
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
                            sx={{ paddingBottom: 1 }}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
export default MovieCriteriaAccordian;