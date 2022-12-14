import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="green iguana"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.food_item}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.food_place}
          
        </Typography>
      </CardContent> */}
      <CardActions sx={{backgroundColor:'#c9ac82'}}>
        <Button sx={{color:'#333239'}}className='card-btn'size="small">more</Button>
       
      </CardActions>
    </Card>
  );
}
