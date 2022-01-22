import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CardDialog from '../card-dialog/CardDialog';

function CardItem({
  item,
  editCard,
  deleteCard,
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
        <Button onClick={() => deleteCard(item.id)} variant="outlined" color="error">Delete</Button>
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
  deleteCard: PropTypes.func.isRequired,
};

export default CardItem;
