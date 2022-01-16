import QuantityButton from "@components/Elements/QuantityButton";
import { colors } from "@theme/colors";
import { fontSizes } from "@theme/fontSizes";
import styled from "styled-components";

interface Cart {
  thumb: string;
  name: string;
  sku: string;
  price: number;
}

interface Props {
  cart: Cart
}

const CartItem = ({ cart }: Props) => {
  return (
    <StyledCartItem>
      <img src={cart.thumb} alt="" className="thumb" />
      <div className="wrap">
        <div className="name">{cart.name}</div>
        <div className="sku">SKU: {cart.sku}</div>
      </div>
      <div className="btn-wrap">
        <QuantityButton />
        <div className="delete">Xóa</div>
      </div>
      <div className="price">{cart.price} đ</div>
    </StyledCartItem>
  )
}

const StyledCartItem = styled.li`
  display: flex;
  margin-bottom: 20px;
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
`

export default CartItem;