import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import CardDialog from '../card-dialog/CardDialog';

function CardItem({
  item,
  editCard,
}) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item && item.title}
        </Typography>
        <Typography variant="body">
          {item && item.body}
        </Typography>
      </CardContent>
      <CardActions>
        <CardDialog updCard={editCard} card={item} />
      </CardActions>
    </Card>
  );
}

CardItem.propTypes = {
  editCard: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
