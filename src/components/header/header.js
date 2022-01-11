import {
  AppBar, Toolbar, Typography, IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          iTechArt React Course
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
