import {
  Box, Divider, Drawer, Link, List, ListItem, ListItemText,
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
          <ListItemText><Link href="/main">Main page</Link></ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}

SideBar.propTypes = {
  sideWidth: PropTypes.number.isRequired,
};

export default SideBar;
