import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

function Layout() {
  const drawerWidth = 240;
  return (
    <>
      <Header drawerWidth={drawerWidth} />
      <Outlet />
    </>
  );
}

export default Layout;
