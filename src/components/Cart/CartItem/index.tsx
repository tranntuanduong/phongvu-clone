import QuantityButton from '@components/Elements/QuantityButton';
import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import { Cart, CartContext, Item } from 'contexts/CartContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { formatCurrency } from 'utils';

interface Props {
  item: Item;
  id: string;
}

const CartItem = (props: Props) => {
  const { id, item } = props;
  const { handleChangeQuantityItem } = useContext(CartContext);

  const handleChangeQuantity = (number: number) => () => {
    handleChangeQuantityItem(id, number);
  };

  return (
    <StyledCartItem>
      <img src={item.thumb} alt="" className="thumb" />
      <div className="wrap">
        <div className="name">{item.name}</div>
        <div className="sku">SKU: {item.sku}</div>
      </div>
      <div className="btn-wrap">
        <QuantityButton quantity={item.quantity} handleChangeQuantity={handleChangeQuantity} />
        <div className="delete">Xóa</div>
      </div>
      <div className="price">{formatCurrency(item.price)}</div>
    </StyledCartItem>
  );
};

const StyledCartItem = styled.li`
  display: flex;
  margin-bottom: 20px;
  padding: 20px 0;
  justify-content: space-between;

  & .thumb {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border: 1px solid ${colors.border};
  }

  & .wrap {
    margin-left: 16px;
    flex: 1;
  }

  & .name {
    font-size: ${fontSizes.desc1};
    color: ${colors.text};
    margin-bottom: 8px;
    line-height: 1.5;
  }

  & .sku {
    font-size: ${fontSizes.desc2};
    color: ${colors.textGrey};
  }

  & .price {
    font-size: ${fontSizes.body1};
    font-weight: 600;
    color: ${colors.text};
    min-width: 100px;
    text-align: right;
  }

  & .btn-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 30px 0 10px;
  }

  & .delete {
    margin-top: 12px;
    font-size: ${fontSizes.desc1};
    color: ${colors.primaryColor};
    cursor: pointer;
    user-select: none;
  }
`;

export default CartItem;
