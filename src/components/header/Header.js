import { AppBar, Toolbar, Typography } from '@mui/material';
import { useMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ drawerWidth }) {
  const isRootPage = useMatch('/main');

  const width = isRootPage ? 0 : drawerWidth;
  return (
    <AppBar
      position="static"
      sx={{
        width: `calc(100% - ${width}px)`,
        ml: `${width}px`,
      }}
    >
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          iTechArt React Course
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

export default Header;
