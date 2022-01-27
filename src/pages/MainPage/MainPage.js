import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
};

function MainPage() {
  return (
    <Container style={mainContainerStyle}>
      <Typography sx={{ textAlign: 'center' }} variant="h1" component="div" gutterBottom>
        <span className="main-red">iTechArt </span>
        React Course
      </Typography>
      <Button
        variant="contained"
        href="/cards"
        sx={{
          width: 200,
          height: 50,
        }}
      >
        Go to cards
      </Button>
    </Container>

  );
}

export default MainPage;
