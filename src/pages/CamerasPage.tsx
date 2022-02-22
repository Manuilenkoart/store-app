import { LinearProgress, Grid, Box } from '@mui/material';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import CameraItem from '../components/CameraItem/CameraItem';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getCamerasFetch } from '../store/reducers/CameraActionCreators';

const CamerasGridWrapper = styled.div`
  position: relative;
`;
const LinearProgressWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: -4px;
`;

const CamerasPage: FC = () => {
  const dispatch = useAppDispatch();

  const { error, cameras, isLoading } = useAppSelector(
    state => state.camerasState,
  );

  useEffect(() => {
    dispatch(getCamerasFetch());
  }, []);

  return (
    <Box>
      <h1>Cameras Page</h1>
      <CamerasGridWrapper>
        <LinearProgressWrapper>
          {isLoading && <LinearProgress />}
        </LinearProgressWrapper>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {cameras.length ? (
            cameras.map(camera => (
              <CameraItem key={camera._id} camera={camera} />
            ))
          ) : (
            <h2>{error}</h2>
          )}
        </Grid>
      </CamerasGridWrapper>
    </Box>
  );
};

export default CamerasPage;
