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

function CardDialog({ params }) {
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

  function isCardValid() {
    const isValid = !cardTitle || !cardBody || !cardTitle.trim().length || !cardBody.trim().length;
    return !isValid;
  }

  const addCard = (isConfirmed = true) => {
    const validCard = isCardValid();
    if (isConfirmed && validCard) {
      const newCard = {
        id: uuidv4(),
        title: cardTitle.trim(),
        body: cardBody.trim(),
      };
      params(newCard);
    }
    setOpen(false);
    clearState();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ mb: 2 }}>
        Add new card
      </Button>
      <Dialog open={open} onClose={() => addCard(false)} sx={{ p: 2 }}>
        <DialogTitle>Add new card</DialogTitle>
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
          <Button onClick={() => addCard(false)}>Cancel</Button>
          <Button onClick={addCard}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CardDialog.propTypes = {
  params: PropTypes.func.isRequired,
};

export default CardDialog;
