import { Card, CardContent,Typography, CardActions, Button } from "@mui/material"

const CardItem = ({body, title='Card without title'}) => {

  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2"> {body} </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CardItem;
