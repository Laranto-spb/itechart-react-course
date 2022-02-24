import { useEffect, useState } from 'react';
import {
  Pagination, PaginationItem, Box, Button,
} from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { cardApi } from '../../../services/apiClient';

const boxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

function CardTabs() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    cardApi.cards.getAll()
      .then(({ data }) => {
        setCards(data);
      });
  }, []);

  const routeAllCards = () => {
    navigate('/cards');
  };

  return (
    <Box sx={boxStyle}>
      <Pagination
        sx={{ mr: 3 }}
        color="standard"
        page={+id || 0}
        count={cards.length}
        variant="outlined"
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/cards/${item.page}`}
            {...item}
          />
        )}
      />
      {id && <Button variant="outlined" color="inherit" onClick={routeAllCards}>All cards</Button>}
    </Box>
  );
}

export default CardTabs;
