import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardsPage from './routes/CardsPage/CardsPage';
import MainPage from './routes/MainPage/MainPage';
import '@fontsource/roboto/500.css';
import Header from './components/header/Header';

const drawerWidth = 240;
function App() {
  return (
    <>
      <Header drawerWidth={drawerWidth} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/cards" element={<CardsPage drawerWidth={drawerWidth} />} />
      </Routes>
    </>
  );
}

export default App;
