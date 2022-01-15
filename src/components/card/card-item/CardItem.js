import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import CardDialog from '../card-dialog/CardDialog';

function CardItem({
  id,
  title,
  body,
  editCard,
}) {
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
        <CardDialog updCard={editCard} cardId={id} />
      </CardActions>
    </Card>
  );
}

CardItem.propTypes = {
  editCard: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default CardItem;
