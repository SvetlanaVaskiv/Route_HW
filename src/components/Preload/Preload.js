import Canvas from "./Canvas"


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";

export default function Preload() {
    const history= useHistory()
    const goBack = () =>
    history.push({
      pathname: `/movies`,
    });
  return (
    <Card >
     <Canvas/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Hold  on a moment, please
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Probably something went wrong. If the page didn't load, go back or wait, please.
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={goBack} size="small">RETURN</Button>
      </CardActions>
    </Card>
  );
}

