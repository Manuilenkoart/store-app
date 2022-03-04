import { Container, Avatar, Button } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getCameraDetailsFetch } from '../store/reducers/CameraActionCreators';

const DetailsContainer = styled.div`
  width: 300px;
  padding-left: 30px;
`;
const CameraDetailsPage: FC = () => {
  const dispath = useAppDispatch();
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { cameraDetails } = useAppSelector(state => state.camerasState);

  useEffect(() => {
    dispath(getCameraDetailsFetch(id));
  }, []);
  return (
    <>
      <Button onClick={goBack}>Go back</Button>
      <Container
        sx={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}
      >
        <Avatar
          sx={{ width: '30vw', height: 'auto', borderRadius: 0 }}
          src={cameraDetails?.url}
          alt={`${cameraDetails?.brand} ${cameraDetails?.model}`}
        />

        <DetailsContainer>
          <h1>
            {cameraDetails?.brand} {cameraDetails?.model}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            eos. Iure quisquam laborum ipsa incidunt.
          </p>
          <p>format: {cameraDetails?.format}</p>
          <h3>price: {cameraDetails?.price}$</h3>
        </DetailsContainer>
      </Container>
    </>
  );
};

export default CameraDetailsPage;
