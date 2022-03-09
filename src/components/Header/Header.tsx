import {
  AppBar,
  BadgeProps,
  Container,
  Dialog,
  Divider,
  Drawer,
  Toolbar,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button/Button';
import Stack from '@mui/material/Stack/Stack';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styledComponent from 'styled-components';
import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import RoutesPath from '../../routes';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
import LoginForm from '../LoginForm/LoginForm';
import { logout } from '../../store/reducers/Auth/AuthActionCreators';
import Roles from '../../models/Roles';
import canManage from '../../utils/canManage';
import RegisterForm from '../RegisterForm/RegisterForm';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const ShoppingCartTitle = styledComponent.div`
width: 300px;
display: flex;
align-items: center;
`;

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [isOpeanDrawer, setIsOpeanDrawer] = useState(false);
  const [isOpeanLoginForm, setIsOpeanLoginForm] = useState(false);
  const [isOpeanRegisterForm, setIsOpeanRegisterForm] = useState(false);

  const selectShoppingCartCamerasLength = useAppSelector(
    state => state.shoppingCartState.cameras.length,
  );
  const selectShoppingCartCameras = useAppSelector(
    state => state.shoppingCartState.cameras,
  );
  const selectShoppingCartFilmsLength = useAppSelector(
    state => state.shoppingCartState.films.length,
  );
  const selectShoppingCartFilms = useAppSelector(
    state => state.shoppingCartState.films,
  );
  const shoppingCartLength =
    selectShoppingCartCamerasLength + selectShoppingCartFilmsLength;
  const { token } = useAppSelector(state => state.authState);
  const userRoles = useAppSelector(state => state.authState.user?.roles);

  const handleCloseLoginForm = () => setIsOpeanLoginForm(false);
  const handleCloseRegisterForm = () => setIsOpeanRegisterForm(false);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography sx={{ mr: 10 }}>Logo</Typography>
            <Stack spacing={2} direction="row" sx={{ flexGrow: 1 }}>
              <NavLink to={RoutesPath.HOME}>
                <Button variant="contained">Главная</Button>
              </NavLink>
              <NavLink to={RoutesPath.CAMERAS}>
                <Button variant="contained">Камеры</Button>
              </NavLink>
              <NavLink to={RoutesPath.FILMS}>
                <Button variant="contained">Пленки</Button>
              </NavLink>

              {canManage([Roles.admin], userRoles) && (
                <NavLink to={RoutesPath.ADMINPANEL}>
                  <Button variant="contained">Админка</Button>
                </NavLink>
              )}

              {token ? (
                <Button variant="contained" onClick={() => dispatch(logout())}>
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    onClick={() => setIsOpeanRegisterForm(true)}
                  >
                    Register
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() => setIsOpeanLoginForm(true)}
                  >
                    Login
                  </Button>
                </>
              )}
            </Stack>
            <IconButton
              aria-label="cart"
              sx={{ color: 'white' }}
              onClick={() => setIsOpeanDrawer(true)}
            >
              <StyledBadge badgeContent={shoppingCartLength} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={isOpeanDrawer}
        onClose={() => setIsOpeanDrawer(false)}
      >
        <ShoppingCartTitle>
          <ShoppingCartIcon sx={{ m: '20px' }} />
          {shoppingCartLength} {shoppingCartLength ? 'items' : 'item'} in shop
        </ShoppingCartTitle>
        <Divider />

        {selectShoppingCartCameras.map(camera => (
          <ShoppingCartItem
            itemType="camera"
            key={camera._id}
            shoppingCart={camera}
          />
        ))}
        {selectShoppingCartFilms.map(film => (
          <ShoppingCartItem
            itemType="film"
            key={film._id}
            shoppingCart={film}
          />
        ))}
      </Drawer>
      <Dialog open={isOpeanLoginForm} onClose={handleCloseLoginForm}>
        <LoginForm OnCloseDialog={handleCloseLoginForm} />
      </Dialog>
      <Dialog open={isOpeanRegisterForm} onClose={handleCloseRegisterForm}>
        <RegisterForm OnCloseDialog={handleCloseRegisterForm} />
      </Dialog>
    </>
  );
};

export default Header;
