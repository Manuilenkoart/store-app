import { Box, Grid, LinearProgress } from '@mui/material';
import React, { FC } from 'react';
import styled from 'styled-components';
import FilmItem from '../components/FilmItem/FilmItem';
import { useGetAllFilmsQuery } from '../services/FilmService';

const FilmGridWrapper = styled.div`
  position: relative;
`;
const LinearProgressWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: -4px;
`;

const FilmsPage: FC = () => {
  const { data: films, isLoading, error } = useGetAllFilmsQuery('');
  return (
    <Box>
      <h1>Films Page</h1>
      <FilmGridWrapper>
        <LinearProgressWrapper>
          {isLoading && <LinearProgress />}
        </LinearProgressWrapper>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {films?.length ? (
            films.map(film => <FilmItem key={film._id} film={film} />)
          ) : (
            <h2>{error}</h2>
          )}
        </Grid>
      </FilmGridWrapper>
    </Box>
  );
};

export default FilmsPage;
