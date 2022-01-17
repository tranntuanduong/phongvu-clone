import BreadCrumb from '@components/BreadCrumb';
import CartCoupons from '@components/Cart/CartCoupons';
import CartItem from '@components/Cart/CartItem';
import CartPayment from '@components/Cart/CartPayment';
import Divider from '@components/Elements/Divider';
import Paper from '@components/Elements/Paper';
import Section from '@components/Elements/Section';
import VerifyIcon from '@components/SvgIcon/VerifyIcon';
import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import { CartContext } from 'contexts/CartContext';
import Container from 'layouts/container';
import Grid from 'layouts/Grid';
import { useContext } from 'react';
import styled from 'styled-components';
import { formatCurrency } from 'utils';

const cartList = [
  {
    thumb: '/access/products/manhinh/screen1.jpg',
    name: 'Chuột không dây Logitech MX Master 3 (Đen)',
    sku: '201201647',
    price: 2490000,
    quantity: 1,
  },
  {
    thumb: '/access/products/dongho/dongho1.jpg',
    name: 'Chuột không dây Logitech MX Master 3 (Đen)',
    sku: '201201647',
    price: 2750000,
    quantity: 3,
  },
  {
    thumb: '/access/products/giadung/giadung1.jpg',
    name: 'Laptop Dell Vostro 15 3510 V5I33 Laptop Dell Vostro 15 3510 V5I33 Laptop Dell Vostro 15 3510 V5I33 Laptop Dell Vostro 15 3510 V5I33',
    sku: '201201647',
    price: 1900000,
    quantity: 2,
  },
];
const Cart = () => {
  const { cartList } = useContext(CartContext);
  let total = 0;

  Object.entries(cartList).forEach(([id, item]) => {
    total = total + item.price * item.quantity;
  });

  return (
    <Container>
      <Section>
        <BreadCrumb breadCrumbs={[]} current="Giỏ hàng" />
      </Section>
      <Section>
        <Grid container gap="16px">
          <Grid item sx={8}>
            <Section>
              <Paper borderRadius="10px" padding="16px">
                <StyledTotalHeader>
                  <div className="seller">
                    <img src="/access/user/seller1.jpg" alt="" className="avatar" />
                    <div className="name">Phong vũ</div>
                    <div className="verify-icon">
                      <VerifyIcon />
                    </div>
                  </div>
                  <div className="total-price">{formatCurrency(total)}</div>
                </StyledTotalHeader>
                <Divider size="small" margin="16px 0 0 0" />
                <StyledCartList>
                  {Object.entries(cartList).map(([id, item], index) => (
                    <CartItem key={index} item={item} id={id} />
                  ))}
                </StyledCartList>
              </Paper>
            </Section>
          </Grid>
          <Grid item sx={4}>
            <Section>
              <Paper borderRadius="10px" padding="16px">
                <CartCoupons />
              </Paper>
            </Section>
            <Section>
              <Paper borderRadius="10px" padding="16px">
                <CartPayment total={total} />
              </Paper>
            </Section>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

const StyledTotalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.text};

  & .seller {
    display: flex;
    align-items: center;
  }

  & .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid ${colors.border};
    margin-right: 8px;
  }

  & .name {
    font-size: ${fontSizes.body2};
    font-weight: 600;
    margin-right: 8px;
  }

  & .verify-icon {
    color: ${colors.success};
  }

  & .total-price {
    font-weight: 600;
    font-size: ${fontSizes.body1};
    color: ${colors.primaryColor};
  }
`;

const StyledCartList = styled.ul``;

export default Cart;
