import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

class MovieReviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  handleChange = (panel) => (event, isExpanded) => {
    this.setState({ expanded: isExpanded ? panel : false });
  };

  render() {
    const { key, movie, reviews } = this.props;

    return (
      <Box key={key} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', width: '80%' }}>
          <Card sx={{ width: '15%', bgcolor: 'grey.100' }}>
            <CardActionArea>
              <CardContent>
                    <CardMedia
                    component="img"
                    height="200"
                    image={movie.moviePoster}
                    alt="poster"
                    />
              </CardContent>
            </CardActionArea>
          </Card>

          <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {reviews.map((review, index) => (
              <Accordion key={index} expanded={this.state.expanded === `panel${index}`} onChange={this.handleChange(`panel${index}`)}>
                <AccordionSummary aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
                  <Typography>{review.reviewTitle}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{review.reviewBody}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default MovieReviewCard;
