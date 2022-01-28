import { Link as RouterLink } from 'react-router-dom';
import {
  Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';

function SideBar({ sideWidth }) {
  return (
    <Drawer
      sx={{
        width: sideWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sideWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box style={{ height: '40px' }} />
      <Divider />
      <List>
        <ListItem>
          <RouterLink
            to="/main"
            style={{
              textDecoration: 'none',
              width: '100%',
              color: 'blue',
            }}
          >
            <ListItemButton>
              <ListItemText primary="Main" />
            </ListItemButton>
          </RouterLink>
        </ListItem>
      </List>
    </Drawer>
  );
}

SideBar.propTypes = {
  sideWidth: PropTypes.number.isRequired,
};

export default SideBar;
