import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import noMoviesImage from '../images/death.png'

export default function NoMovies() {
    return (
        <Grid container justifyContent="center" alignItems="center" height="100%">
          <Box sx={{ p: 6 }}>
            <Typography variant="h3">
              Hmmm... there were no movie results for "your search".
            </Typography>
            <Typography variant="body1">
              Check your search for typos or try searching for a different movie title.
            </Typography>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={noMoviesImage} alt="No movies found" style={{  marginTop: 16, maxWidth: '100%', width: 500  }} />
            </Box>
          </Box>
            </Grid>
  );
}
