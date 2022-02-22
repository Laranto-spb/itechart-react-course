import { useEffect, useState } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { cardApi } from '../../../services/apiClient';

function CardTabs() {
  const [cards, setCards] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    cardApi.cards.getAll()
      .then(({ data }) => {
        setCards(data);
      });
  }, []);
  return (
    <Pagination
      count={cards.length}
      variant="outlined"
      renderItem={(item) => (
        <PaginationItem
          page={id}
          component={Link}
          to={`/cards/${item.page}`}
          {...item}
        // TODO Add all cards item and initial page from url
        />
      )}
    />
  );
}

export default CardTabs;
