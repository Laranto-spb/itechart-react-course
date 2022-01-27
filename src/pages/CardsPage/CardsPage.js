import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import CardItem from '../../components/card/card-item/CardItem';
import CardDialog from '../../components/card/card-dialog/CardDialog';
import { cardApi } from '../../services/apiClient';
import SideBar from '../../components/sidebar/SideBar';

function CardsPage({ drawerWidth }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    cardApi.cards.getAll()
      .then((res) => setCards((res.data)));
  }, []);

  const setNewCard = (newCard) => {
    cardApi.cards.create(newCard)
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
    <Box sx={{ display: 'flex' }}>
      <SideBar sideWidth={drawerWidth} />
      <Container maxWidth="xl" sx={{ pt: 3 }}>
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
    </Box>
  );
}

CardsPage.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

export default CardsPage;
