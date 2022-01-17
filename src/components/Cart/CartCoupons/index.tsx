import Button from '@components/Elements/Button';
import Divider from '@components/Elements/Divider';
import TextField from '@components/Form/TextField';
import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

const CartCoupons = () => {
  return (
    <StyledCartCoupons>
      <div className="title">Chọn mã giảm giá/phiếu mua hàng</div>
      <div className="wrap">
        <TextField placeholder="Nhập mã của bạn" />
        <div className="btn">
          <Button disiable>Áp dụng ngay</Button>
        </div>
      </div>
      <Divider size='medium' type="dashed" margin="20px 0"/>
    </StyledCartCoupons>
  );
};

const StyledCartCoupons = styled.div`
  & .title {
    font-size: ${fontSizes.body1};
    color: ${colors.text};
    font-weight: 600;
  }

  & .wrap {
    margin-top: 20px;
    display: flex;

    & input {
      margin-right: 10px;
    }

    & .btn {
      min-width: 120px;
    }
  }
`;

export default CartCoupons;
