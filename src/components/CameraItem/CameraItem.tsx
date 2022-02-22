import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  Grid,
  Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { ICamera } from '../../models/ICamera';
import RoutesPath from '../../routes';

import { deleteCameraFetch } from '../../store/reducers/CameraActionCreators';
import { addCameraToShoppingCart } from '../../store/reducers/ShoppingCartSlice';
import CameraForm from '../CameraForm/CameraForm';

interface CameraItemProps {
  camera: ICamera;
}
const CameraItem: FC<CameraItemProps> = ({ camera }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <Card
            sx={{
              with: 345,
              height: 250,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CardMedia
              sx={{ height: '100%', width: 'auto' }}
              component="img"
              image={camera.url}
              alt={`${camera.brand} ${camera.model}`}
            />
          </Card>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {camera.brand} {camera.model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, dicta.
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              price: {camera.price}$
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/${RoutesPath.CAMERAS}/${camera._id}`}>
              <Button size="small">Learn More</Button>
            </Link>
            <Button size="small" onClick={handleClickOpen}>
              update
            </Button>
            <Button
              size="small"
              onClick={() => dispatch(deleteCameraFetch(camera))}
            >
              delete
            </Button>
            <Button onClick={() => dispatch(addCameraToShoppingCart(camera))}>
              +
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <CameraForm camera={camera} OnCloseDialog={handleClose} />
      </Dialog>
    </>
  );
};

export default CameraItem;
