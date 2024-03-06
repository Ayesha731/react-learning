import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Movie = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 250, margin: "8px" }}>
        <CardMedia sx={{ height: 250 }} image={props.img} title="" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {props.year}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to favourite</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Movie;
