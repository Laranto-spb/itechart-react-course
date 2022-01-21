import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
import CardItem from '../card/card-item/CardItem';
import CardDialog from '../card/card-dialog/CardDialog';
import { cardApiResult } from '../../services/apiClient';

function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    cardApiResult.cards.getAll()
      .then((res) => setCards((res.data)));
  }, []);

  const setNewCard = (newCard) => {
    cardApiResult.cards.create(newCard)
      .then((res) => console.log('Server response: ', res.status));
    setCards([...cards, newCard]);
  };

  const updateCard = (updatedCard) => {
    const newCards = [...cards];
    const cardIndex = cards.findIndex((card) => card.id === updatedCard.id);
    newCards[cardIndex] = updatedCard;
    setCards(newCards);
  };

  const removeCard = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
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
