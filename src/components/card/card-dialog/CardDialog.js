import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

function CardDialog({ params }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const clearState = () => {
    setTitle(null);
    setTitle(null);
  };

  const handleClose = (isSaved = true) => {
    setOpen(false);
    if (isSaved && title && body) {
      params(title, body);
    }
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
      <Dialog open={open} onClose={() => handleClose(false)} sx={{ p: 2 }}>
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
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CardDialog.propTypes = {
  params: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CardDialog;
