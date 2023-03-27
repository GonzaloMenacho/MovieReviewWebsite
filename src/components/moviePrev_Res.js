import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "top center",
    height: "25vh",
    padding: '3%',
    flexWrap: 'wrap',
    '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
  },
  paper: {
    //padding: "24px",
    transition: "transform 0.2s ease-out", // add a transition for a smoother effect
  },
  paperHovered: {
    transform: "scale(1.2)", // make the paper 20% larger when hovered
    backgroundColor: "#000", // change the background color to black when hovered
  },
};

export default function CompForMoviePreview() {
  const [isHovered, setIsHovered] = React.useState([false, false, false]);

  const handleHover = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleLeave = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };


  return (
<Box sx={styles.container}>
      <Paper
        sx={{ ...styles.paper, ...(isHovered[0] && styles.paperHovered) }}
        onMouseEnter={() => handleHover(0)}
        onMouseLeave={() => handleLeave(0)}
        elevation={3}
      >
      </Paper>
      
    </Box>
  );
}