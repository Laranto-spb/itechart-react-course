import { AppBar, Toolbar, Typography } from '@mui/material';
import { useMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardTabs from '../card/card-tabs/CardTabs';

function Header({ drawerWidth }) {
  const isMainPage = useMatch('/main');
  const isRootPage = useMatch('/');
  const isCardsPage = useMatch('/cards');
  const isCardInfoPage = useMatch('/cards/*');

  const width = isRootPage || isMainPage ? 0 : drawerWidth;
  return (
    <AppBar
      position="static"
      sx={{
        width: `calc(100% - ${width}px)`,
        ml: `${width}px`,
      }}
    >
      <Toolbar variant="regular">
        <Typography variant="h6" color="inherit" component="div" sx={{ mr: 3 }}>
          iTechArt React Course
        </Typography>
        {(isCardsPage || isCardInfoPage) && <CardTabs />}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

export default Header;
