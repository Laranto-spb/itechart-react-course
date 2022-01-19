import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { isBlank } from '../../utils/utils';

function CardDialog({
  addCard,
  card,
  updCard,
}) {
  const [open, setOpen] = useState(false);
  const [cardTitle, setTitle] = useState(card.title);
  const [cardBody, setBody] = useState(card.body);

  useEffect(() => {
    if (open) {
      setTitle(card.title);
      setBody(card.body);
    }
  }, [open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const saveCard = (isConfirmed = true) => {
    const isExists = !!card.id;
    const handler = isExists ? updCard : addCard;
    const isInvalid = isBlank(cardTitle) || isBlank(cardBody);
    if (isConfirmed && !isInvalid) {
      handler({
        id: isExists ? card.id : uuidv4(),
        title: cardTitle.trim(),
        body: cardBody.trim(),
      });
      setOpen((prev) => !prev);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {card.id ? 'Edit' : 'Add new card'}
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} sx={{ p: 2 }}>
        <DialogTitle>
          {card.id ? 'Edit card' : 'Add new card'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in details
          </DialogContentText>
          <div>
            <TextField
              margin="normal"
              id="card-title"
              label="Card title"
              variant="outlined"
              onChange={handleTitleChange}
              value={cardTitle || ''}
            />
          </div>
          <div>
            <TextField
              id="card-body"
              label="Card text"
              variant="outlined"
              onChange={handleBodyChange}
              value={cardBody || ''}
            />
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={saveCard}>
            {card.id ? 'Edit' : 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

CardDialog.defaultProps = {
  addCard: undefined,
  updCard: undefined,
  card: {
    title: null,
    body: null,
  },
};

CardDialog.propTypes = {
  addCard: PropTypes.func,
  updCard: PropTypes.func,
  card: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default CardDialog;
