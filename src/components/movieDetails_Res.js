import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

const styles = {
    container: {
      display: "flex",
      justifyContent: "left",
      alignItems: "left center",
      height: "25vh",
      padding: '3%',
      flexWrap: 'wrap',
      '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
    }
};


export default function GroupedReviews(){

    return(
            <Box sx={styles.container}>
                <Tooltip title="Movie Details" placement="right">
                    <Paper elevation={3} />
                 </Tooltip>
            </Box>
            
    );
}