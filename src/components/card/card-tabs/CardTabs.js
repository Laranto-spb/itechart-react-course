import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { cardApi } from '../../../services/apiClient';

function CardTabs() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    cardApi.cards.getAll()
      .then(({ data }) => {
        setCards(data);
      });
  }, []);
  return (
    <Pagination count={cards.length} variant="outlined" />
  );
}

export default CardTabs;
