import {
  Button, Card, CardActions, CardContent, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

function CardItem({ title, body }) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title && title}
        </Typography>
        <Typography variant="body">
          {body && body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CardItem;
