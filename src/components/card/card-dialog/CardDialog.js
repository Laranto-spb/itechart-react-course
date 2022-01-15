import { useState } from 'react';
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
  cardId,
  updCard,
}) {
  const [open, setOpen] = useState(false);
  const [cardTitle, setTitle] = useState(null);
  const [cardBody, setBody] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const clearState = () => {
    setTitle(null);
    setBody(null);
  };

  const saveCard = (isConfirmed = true) => {
    const isInvalid = isBlank(cardTitle) || isBlank(cardBody);
    if (isConfirmed && !isInvalid) {
      addCard({
        id: uuidv4(),
        title: cardTitle.trim(),
        body: cardBody.trim(),
      });
    }
    setOpen((prev) => !prev);
    clearState();
  };

  const editCard = () => {
    const isInvalid = isBlank(cardTitle) || isBlank(cardBody);
    if (!isInvalid) {
      updCard({
        id: cardId,
        title: cardTitle.trim(),
        body: cardBody.trim(),
      });
    }
    setOpen((prev) => !prev);
    clearState();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  let button;

  if (addCard) {
    button = <Button onClick={saveCard}>Submit</Button>;
  } else {
    button = <Button onClick={editCard}>Edit</Button>;
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ mb: 2 }}>
        {addCard ? 'Add new card' : 'Edit'}
      </Button>
      <Dialog open={open} onClose={() => saveCard(false)} sx={{ p: 2 }}>
        <DialogTitle>
          {addCard ? 'Add new card' : 'Edit new card'}
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
            />
          </div>
          <div>
            <TextField
              id="card-body"
              label="Card text"
              variant="outlined"
              onChange={handleBodyChange}
            />
          </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => saveCard(false)}>Cancel</Button>
          {button}
        </DialogActions>
      </Dialog>
    </div>
  );
}

CardDialog.propTypes = {
  addCard: PropTypes.func,
  updCard: PropTypes.func,
  cardId: PropTypes.string,
};

export default CardDialog;
