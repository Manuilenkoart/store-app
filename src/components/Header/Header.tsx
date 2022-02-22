import {
  AppBar,
  BadgeProps,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button/Button';
import Stack from '@mui/material/Stack/Stack';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import RoutesPath from '../../routes';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography sx={{ mr: 10 }}>Logo</Typography>
          <Stack spacing={2} direction="row">
            <NavLink to={RoutesPath.HOME}>
              <Button variant="contained">Главная</Button>
            </NavLink>
            <NavLink to={RoutesPath.CAMERAS}>
              <Button variant="contained">Камеры</Button>
            </NavLink>
            <NavLink to={RoutesPath.ADMINPANEL}>
              <Button variant="contained">Админка</Button>
            </NavLink>

            <IconButton aria-label="cart" sx={{ color: 'white' }}>
              <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
