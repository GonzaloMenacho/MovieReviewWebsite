import React from "react";
import TextField from "@mui/material/TextField";
import { ListItem } from "@mui/material";

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
        label="Review Keyowrd"
        value={textValues[1]}
        onChange={(e) => handleTextChange(e, 1)}
        helperText="e.g. Very funny "
        sx={{paddingBottom: 1 }}
      />
      </ListItem>
    </div>
  );
}

export default AdvancedTextField;