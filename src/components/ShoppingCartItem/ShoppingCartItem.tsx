import React, { FC } from 'react';
import styledComponent from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { CardMedia, Divider } from '@mui/material';
import { deleteCameraFromShoppingCart } from '../../store/reducers/ShoppingCartSlice';
import { ICamera } from '../../models/ICamera';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { IFilm } from '../../models/IFilm';

const ItemContainer = styledComponent.div`
display: flex;
justify-content: space-around;
align-items: center;
`;

const ImgContainer: FC = styledComponent.div`
width: 100px
`;

enum ShoppingCartItemTypes {
  camera = 'camera',
  film = 'film',
}
interface ShoppingCartItemProps {
  shoppingCart: ICamera | IFilm;
  itemType: string;
}

const ShoppingCartItem: FC<ShoppingCartItemProps> = ({
  shoppingCart,
  itemType,
}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ItemContainer>
        <ImgContainer>
          <CardMedia component="img" src={shoppingCart.url} />
        </ImgContainer>
        <div>
          <h3>
            {shoppingCart.brand} {shoppingCart.model}
          </h3>
          <p>price: {shoppingCart.price}$</p>
        </div>
        {itemType === ShoppingCartItemTypes.camera && (
          <CloseIcon
            onClick={() =>
              dispatch(deleteCameraFromShoppingCart(shoppingCart as ICamera))
            }
          />
        )}
      </ItemContainer>
      <Divider />
    </>
  );
};

export default ShoppingCartItem;
