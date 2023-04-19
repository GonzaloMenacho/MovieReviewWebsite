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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThumbUp, ThumbDown, Feedback } from '@mui/icons-material';
import { WidthFull } from '../../node_modules/@mui/icons-material/index';

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
      <Box key={key} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1rem'}}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', width: '80%' }}>
          <Card sx={{ width: '15%', bgcolor: 'grey.100', flexShrink: 0, minWidth: 150 }}>
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
                <Box sx={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
            {reviews.map((review, index) => (
                <Accordion
                    key={index}
                    sx={{
                        minWidth: WidthFull * .80,
                        maxWidth: WidthFull * .80,
                    }}
                    expanded={this.state.expanded === `panel${index}`}
                    onChange={this.handleChange(`panel${index}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon /> }
                        aria-controls={`panel${index}a-content`}
                        id={`panel${index}a-header`}>
                        <Typography sx={{
                            color: review.userRating > 7 ? "royalblue" : review.userRating < 5 ? "red" : "teal",
                            width: '5%',
                            minWidth: 50,
                            maxWidth: 50,
                            whiteSpace: 'nowrap',
                            flexShrink: 0
                        }}>
                            {review.userRating} / 10
                        </Typography>
                        <>
                            {review.userRating > 7 ? (
                                <ThumbUp sx={{
                                    color: 'blue',
                                    width: '5%',
                                    minWidth: 40,
                                    flexShrink: 0
                                }} />
                            ) : review.userRating < 5 ? (
                                <ThumbDown sx={{
                                    color: 'red',
                                    width: '5%',
                                    minWidth: 40,
                                    flexShrink: 0
                                }} />
                                ) : <Feedback sx={{
                                    color: 'teal',
                                    width: '5%',
                                    minWidth: 40,
                                    flexShrink: 0
                                }} />}
                        </>
                        <Typography
                            sx={{ color: 'black' }}>
                            {review.reviewTitle}
                        </Typography>
                </AccordionSummary>
                    <AccordionDetails id={index}
                        sx={{

                        }}>
                        <Typography
                            sx={{ color: 'black'}}
                            variant="h6"
                            component="span"
                            gutterbottom="true"
                        >
                            <span style={{
                                fontWeight: 'bold',
                                color: review.userRating > 7 ? "royalblue" : review.userRating < 5 ? "red" : "teal",
                            }}>{review.username}</span> says...
                        </Typography>
                        <Box sx={{padding: '16px'}}>
                            <Card
                                sx={{
                                    
                                }}
                                variant="outlined"
                                gutterbottom="true"
                            >
                            <CardContent>
                                <Typography sx={{
                                    color: 'text.primary'
                                }}>
                                    {review.reviewBody}
                                </Typography>
                            </CardContent>
                            </Card>
                        </Box>
                        <Typography
                            sx={{ color: 'text.secondary' }}
                            variant="h6"
                            gutterbottom="true"
                        >
                            {new Date(review.dateofReview).toLocaleString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </Typography>
                        <Typography
                            sx={{
                            color: 'text.secondary'
                            }}
                            component="span"
                        >
                            <span style={{
                                fontWeight: 'bold',
                                color: review.usefulnessVote / review.totalVotes > .85 ? "royalblue" : review.usefulnessVote / review.totalVotes < .6 ? "red" : "teal",
                            }}>
                            {review.usefulnessVote}</span> out of {review.totalVotes} users found this review helpful.
                        </Typography>
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
