import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MoviePreview() {
  return (
    <Card sx={{ maxWidth:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
          alt="green iguana"
        />
        <CardContent>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}