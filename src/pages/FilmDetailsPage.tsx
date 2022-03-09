import { Avatar, Button, Container } from '@mui/material';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { filmApi } from '../services/FilmService';

const DetailsContainer = styled.div`
  width: 300px;
  padding-left: 30px;
`;

const FilmDetailsPage: FC = () => {
  const { id = '' } = useParams();
  const { data: filmDetail } = filmApi.useGetFilmByIdQuery(id);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <Button onClick={goBack}>Go back</Button>
      <Container
        sx={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}
      >
        <Avatar
          sx={{ width: '30vw', height: 'auto', borderRadius: 0 }}
          src={filmDetail?.url}
          alt={`${filmDetail?.brand} ${filmDetail?.model}`}
        />

        <DetailsContainer>
          <h1>
            {filmDetail?.brand} {filmDetail?.model}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            eos. Iure quisquam laborum ipsa incidunt.
          </p>
          <p>format: {filmDetail?.format}</p>
          <p>frames: {filmDetail?.frames}</p>
          <p>iso: {filmDetail?.iso}</p>

          <h3>price: {filmDetail?.price}$</h3>
        </DetailsContainer>
      </Container>
    </>
  );
};

export default FilmDetailsPage;
