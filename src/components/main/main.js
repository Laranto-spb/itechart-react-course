import { v4 as uuidv4 } from 'uuid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import CardItem from '../card-item/card-item';

function Main() {
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
  return (
    <Container maxWidth="xl">
      <Typography sx={{ textAlign: 'center' }} variant="h1" component="div" gutterBottom>
        <span className="main-red">iTechArt</span>
        React Course
      </Typography>

      <Grid container spacing={3}>

        {
          CARDS.map(({ id, title, body }) => (
            <Grid key={id} item xs={12} lg={4}>
              <CardItem title={title} body={body} />
            </Grid>
          ))
        }

      </Grid>

    </Container>

  );
}

export default Main;
