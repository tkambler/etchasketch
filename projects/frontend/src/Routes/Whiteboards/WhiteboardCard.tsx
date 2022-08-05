import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from '@app/lib/hooks';
import { useState } from './State';

export function WhiteboardCard({ whiteboard }: { whiteboard }) {
  const state = useState();
  const history = useHistory();
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        width="300"
        image={`http://localhost:8040/api/whiteboards/${whiteboard.id}.png`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {whiteboard.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created By: {whiteboard.user.first_name} {whiteboard.user.last_name} (
          {whiteboard.user.username})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Drawing Time: {whiteboard.drawing_time.toLocaleString()} second(s)
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            history.push(`/whiteboards/${whiteboard.id}`);
          }}
        >
          View
        </Button>
        <Button size="small" onClick={() => {}}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
