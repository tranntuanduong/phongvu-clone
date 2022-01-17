import Button from '@components/Elements/Button';
import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';
import { formatCurrency } from 'utils';

interface Props {
  total: number;
}

const CartPayment = (props: Props) => {
  const { total = 0 } = props;
  return (
    <StyledCartPayment>
      <div className="title">Thanh toán</div>
      <div className="wrap">
        <div className="label">Tạm tính</div>
        <div className="temp-price">{formatCurrency(total)}</div>
      </div>
      <div className="wrap">
        <div className="label">Thành tiền</div>
        <div className="price">{formatCurrency(total)}</div>
      </div>
      <div className="desc">(Đã bao gồm VAT)</div>
      <div className="btn">
        <Button>Tiếp tục thanh toán</Button>
      </div>
    </StyledCartPayment>
  );
};

const StyledCartPayment = styled.div`
  font-size: ${fontSizes.body2};
  color: ${colors.textGrey};

  & .title {
    color: ${colors.text};
    font-size: ${fontSizes.subtitle};
    font-weight: 600;
    padding-bottom: 8px;
  }

  & .wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    & .temp-price {
      font-weight: 600;
      color: ${colors.text};
    }

    & .price {
      font-weight: 600;
      color: ${colors.error};
      font-size: ${fontSizes.subtitle};
    }
  }

  & .desc {
    text-align: end;
    margin-top: 10px;
  }

  & .btn {
    margin-top: 20px;
  }
`;

export default CartPayment;
