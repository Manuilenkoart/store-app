import React, { FC } from 'react';
import styled from 'styled-components';
import CameraForm from '../components/CameraForm/CameraForm';
import FilmForm from '../components/FilmForm/FilmForm';

const Container = styled.div`
  display: flex;
`;

const AdminPanelPage: FC = () => {
  return (
    <div>
      <div>Admin Panel Page</div>
      <Container>
        <CameraForm />
        <FilmForm />
      </Container>
    </div>
  );
};

export default AdminPanelPage;
