import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Typography sx={{ textAlign: 'center' }} variant="h1" component="div" gutterBottom>
        <span className='main-red'>iTechArt</span> React Course
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Card 1
            </Typography>
              <Typography variant="body2">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Card 2
            </Typography>
              <Typography variant="body2">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Card 3
            </Typography>
              <Typography variant="body2">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>

    </Container>
  );
}

export default Main;
