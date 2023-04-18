import React from "react";
import TextField from "@mui/material/TextField";
import { ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AdvancedTextField({ textValues, handleTextChange }) {
    return (
        <div>
            <ListItem input>
                <TextField
                    variant="standard"
                    label="Movie Title"
                    value={textValues[0]}
                    onChange={(e) => handleTextChange(e, 0)}
                />
            </ListItem>
            <ListItem input>
                <TextField
                    variant="standard"
                    label="Review Keyword"
                    value={textValues[1]}
                    onChange={(e) => handleTextChange(e, 1)}
                    helperText="e.g. Very funny "
                    sx={{ paddingBottom: 1 }}
                />
            </ListItem>
        </div>
    );
}

export default AdvancedTextField;