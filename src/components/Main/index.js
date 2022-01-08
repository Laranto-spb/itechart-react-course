import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import CardItem from '../CardItem/index.js';
import { useState } from 'react';

const Main = () => {

  const [cardTitle, setCardTitle] = useState('Card title')
  const [cardText, setCardText] = useState('Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum')

  return (
    <>
    <Container maxWidth="xl">
      <Typography sx={{ textAlign: 'center' }} variant="h1" component="div" gutterBottom>
        <span className='main-red'>iTechArt</span> React Course
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <CardItem body={cardText} title={cardTitle}/>
        </Grid>

        <Grid item xs={12} lg={4}>
          <CardItem body={cardText} title={cardTitle}/>
        </Grid>
        <Grid item xs={12} lg={4}>
          <CardItem body={cardText}/>
        </Grid>

      </Grid>

    </Container>      
    </>

  );
}

export default Main;
