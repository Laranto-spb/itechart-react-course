import { useEffect, useState } from 'react';
import { cardApi } from '../../services/apiClient';
import CardItem from '../../components/card/card-item/CardItem';

function CardDetailsPage() {
  const [cardInfo, setCardInfo] = useState({});

  const updateCard = (updatedItem) => {
    setCardInfo(updatedItem);
  };

  const deleteCard = () => {
    setCardInfo({});
  };
  useEffect(() => {
    cardApi.cards.get(1)
      .then((res) => {
        setCardInfo(res.data);
      });
  }, []);
  return (
    <>
      <h1>Cards details</h1>
      <CardItem item={cardInfo} editCard={updateCard} deleteCard={deleteCard} />
    </>
  );
}
export default CardDetailsPage;
