import React, { FC, useState } from 'react';
import {
  Button,
  Dialog,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { IFilm } from '../../models/IFilm';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addFilmToShoppingCart } from '../../store/reducers/ShoppingCartSlice';
import { filmApi } from '../../services/FilmService';
import FilmForm from '../FilmForm/FilmForm';
import RoutesPath from '../../routes';
import Roles from '../../models/Roles';
import canManage from '../../utils/canManage';

interface FilmItemProps {
  film: IFilm;
}
const FilmItem: FC<FilmItemProps> = ({ film }) => {
  const [deleteFilm] = filmApi.useDeleteFilmMutation();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const userRoles = useAppSelector(state => state.authState.user?.roles);

  const handleClickOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
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
              image={film.url}
              alt={`${film.brand} ${film.model}`}
            />
          </Card>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {film.brand} {film.model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, dicta.
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              price: {film.price}$
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Link to={`/${RoutesPath.FILMS}/${film._id}`}>
              <Button size="small">Learn More</Button>
            </Link>
            {canManage([Roles.admin], userRoles) && (
              <>
                <Button size="small" onClick={handleClickOpen}>
                  update
                </Button>

                <Button size="small" onClick={() => deleteFilm(film)}>
                  delete
                </Button>
              </>
            )}

            <Button onClick={() => dispatch(addFilmToShoppingCart(film))}>
              +
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Dialog open={isOpen} onClose={handleClose}>
        <FilmForm film={film} OnCloseDialog={handleClose} />
      </Dialog>
    </>
  );
};

export default FilmItem;
