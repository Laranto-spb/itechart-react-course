import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardsPage from './pages/CardsPage/CardsPage';
import MainPage from './pages/MainPage/MainPage';
import '@fontsource/roboto/500.css';
import Layout from './components/layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CardDetailsPage from './pages/CardDetailsPage/CardDetailsPage';

const drawerWidth = 240;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/cards" element={<CardsPage drawerWidth={drawerWidth} />} />
        <Route path="/test" element={<CardDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
