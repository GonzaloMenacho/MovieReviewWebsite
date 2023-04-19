import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import noMoviesImage from '../images/death.png'

export default function NoMovies() {
    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            height="100%">
            <Box sx={{
                p: 6
            }}>
                <Typography
                    variant="h4">
                We couldn't find any results for your search.
                </Typography>
                <hr />
                <Typography
                    variant="body1"
                    component="span"
                >
                    Your search was a bit&nbsp;
                    <span style={{color: "red"}}>
                        sus...
                    </span>
                    Check for typos or try searching for something else.
                </Typography>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                <img src={noMoviesImage} alt="No movies found" style={{  marginTop: 16, maxWidth: '100%', width: 500  }} />
                </Box>
            </Box>
        </Grid>
  );
}
