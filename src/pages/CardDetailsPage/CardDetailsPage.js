import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { cardApi } from '../../services/apiClient';
import CardItem from '../../components/card/card-item/CardItem';
import SideBar from '../../components/sidebar/SideBar';

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  pt: 3,
};

function CardDetailsPage({ drawerWidth }) {
  const [cardInfo, setCardInfo] = useState({
    name: '',
    title: '',
    body: '',
  });

  const updateCard = (updatedItem) => {
    setCardInfo(updatedItem);
  };

  const { id } = useParams();

  useEffect(() => {
    cardApi.cards.get(id)
      .then((res) => {
        setCardInfo(res.data);
      });
  }, [id]);
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar sideWidth={drawerWidth} />
      <Container sx={cardContainerStyle}>
        <Typography variant="h2" align="center">Cards details</Typography>
        <Box maxWidth="50%">
          <CardItem item={cardInfo} editCard={updateCard} />
        </Box>
      </Container>
    </Box>
  );
}

CardDetailsPage.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

export default CardDetailsPage;
