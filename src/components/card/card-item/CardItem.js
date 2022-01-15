import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CardDialog from '../card-dialog/CardDialog';

function CardItem({
  id,
  title,
  body,
  editCard,
  deleteCard,
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
        <Button onClick={() => deleteCard(id)} variant="outlined" color="error">Delete</Button>
      </CardActions>
    </Card>
  );
}

CardItem.propTypes = {
  editCard: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardItem;
