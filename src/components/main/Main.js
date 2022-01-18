import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
import CardItem from '../card/card-item/CardItem';
import CardDialog from '../card/card-dialog/CardDialog';

const CARDS = [
  {
    id: uuidv4(),
    title: 'Card 1',
    body: 'Text of Card 1',
  },
  {
    id: uuidv4(),
    title: 'Card 2',
    body: 'Text of Card 2',
  },
  {
    id: uuidv4(),
    title: 'Card 3',
    body: 'Text of Card 3',
  },
];

function Main() {
  const [cards, setCards] = useState(CARDS);

  const setNewCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const updateCard = (updatedCard) => {
    const newCards = cards.map((card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      }
      return card;
    });
    setCards([...newCards]);
  };

  const removeCard = (cardId) => {
    const filtered = cards.filter((card) => card.id !== cardId);
    setCards([...filtered]);
  };

  return (
    <Container maxWidth="xl">
      <Typography sx={{ textAlign: 'center' }} variant="h1" component="div" gutterBottom>
        <span className="main-red">iTechArt</span>
        React Course
      </Typography>
      <Box sx={{ mb: 2 }}>
        <CardDialog addCard={setNewCard} />
      </Box>

      <Grid container spacing={3}>

        {
          cards.map((it) => (
            <Grid key={it.id} item xs={12} lg={4}>
              <CardItem
                deleteCard={removeCard}
                editCard={updateCard}
                item={it}
              />
            </Grid>
          ))
        }

      </Grid>

    </Container>

  );
}

export default Main;
