import React, { FC } from 'react';
import styledComponent from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { CardMedia, Divider } from '@mui/material';
import { deleteCameraFromShoppingCart } from '../../store/reducers/ShoppingCartSlice';
import { ICamera } from '../../models/ICamera';
import { useAppDispatch } from '../../hooks/reduxHooks';

const ItemContainer = styledComponent.div`
display: flex;
justify-content: space-around;
align-items: center;
`;

const ImgContainer: FC = styledComponent.div`
width: 100px
`;

interface ShoppingCartItemProps {
  camera: ICamera;
}

const ShoppingCartItem: FC<ShoppingCartItemProps> = ({ camera }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ItemContainer>
        <ImgContainer>
          <CardMedia component="img" src={camera.url} />
        </ImgContainer>
        <div>
          <h3>
            {camera.brand} {camera.model}
          </h3>
          <p>price: {camera.price}$</p>
        </div>
        <CloseIcon
          onClick={() => dispatch(deleteCameraFromShoppingCart(camera))}
        />
      </ItemContainer>
      <Divider />
    </>
  );
};

export default ShoppingCartItem;
