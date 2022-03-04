import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { useAppSelector } from './hooks/reduxHooks';
import Roles from './models/Roles';
import AdminPanelPage from './pages/AdminPanelPage';
import CameraDetailsPage from './pages/CameraDetailsPage';
import CamerasPage from './pages/CamerasPage';
import FilmDetailsPage from './pages/FilmDetailsPage';
import FilmsPage from './pages/FilmsPage';
import HomePage from './pages/HomePage';
import RoutesPath from './routes';
import canManage from './utils/canManage';

const App = () => {
  const userRoles = useAppSelector(state => state.authState.user?.roles);

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path={RoutesPath.HOME} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={RoutesPath.CAMERAS} element={<CamerasPage />} />
            <Route path={RoutesPath.CAMERAID} element={<CameraDetailsPage />} />
            <Route path={RoutesPath.FILMS} element={<FilmsPage />} />
            <Route path={RoutesPath.FILMID} element={<FilmDetailsPage />} />
            {canManage([Roles.admin], userRoles) && (
              <Route
                path={RoutesPath.ADMINPANEL}
                element={<AdminPanelPage />}
              />
            )}
            <Route path="*" element={<Navigate to={RoutesPath.HOME} />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
