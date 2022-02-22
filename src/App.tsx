import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AdminPanelPage from './pages/AdminPanelPage';
import CameraDetailsPage from './pages/CameraDetailsPage';
import CamerasPage from './pages/CamerasPage';
import HomePage from './pages/HomePage';
import RoutesPath from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path={RoutesPath.HOME} element={<HomePage />} />
          <Route path={RoutesPath.CAMERAS} element={<CamerasPage />} />
          <Route path={RoutesPath.CAMERAID} element={<CameraDetailsPage />} />

          <Route path={RoutesPath.ADMINPANEL} element={<AdminPanelPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
