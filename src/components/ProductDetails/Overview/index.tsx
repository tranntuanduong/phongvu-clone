import Button from '@components/Elements/Button';
import Divider from '@components/Elements/Divider';
import PresentIcon from '@components/SvgIcon/PresentIcon';
import { colors } from '@theme/colors';
import Link from 'next/link';
import { BsCheck } from 'react-icons/bs';
import OverviewPlayer from './OverviewPlayer';
import {
  StyledAdvertise,
  StyledCouponGift,
  StyledGift, StyledOverview,
  StyledProductOverview,
  StyledPromote
} from './ProductOverview';

const ProductOverview = () => {

  return (
    <StyledProductOverview>
      <OverviewPlayer />

      <StyledOverview>
        <h3 className="title">
          Card màn hình MSI GeForce RTX 3080 Ti VENTUS 3X 12G OC 12GB GDDR6X 3080 Ti VENTUS 3X 12G
          OC 12GB GDDR6X
        </h3>
        <div className="brand-wrap">
          <div className="brand">
            Thương hiệu: <span>MSI</span>
          </div>
          <div className="sku">SKU: 210601911</div>
        </div>
        <div className="quantity">Chỉ còn 2 sản phẩm</div>
        <div className="price">55.990.000đ</div>
        <div className="price--promote">12.990.000đ</div>
        <StyledGift>
          <div className="gift-title">Bạn sẽ nhận được</div>
          <div className="jun-gift">
            <img src="/access/products/dongho/dongho1.jpg" alt="" className="jun-gift__thumb" />
            <div className="jun-gift__quantity">x1</div>
            <div className="jun-gift__name">Loa Soundbar Samsung HW-T420</div>
          </div>
        </StyledGift>
        <Divider size="small" type="dashed" margin="20px 0" />

        <StyledCouponGift>
          <div className="gift-title">Chọn thêm 1 trong những khuyến mãi sau</div>
          <div className="coupon-wrap">
            <div className="gift-icon">
              <PresentIcon />
            </div>
            <div className="content-wrap">
              <div className="name">Giá Tốt Mỗi Ngày</div>
              <div className="desc">
                Giảm trực tiếp: <span>6.410.000đ</span>
              </div>
              <div className="label">
                <div className="label__icon">
                  <BsCheck />
                </div>
              </div>
            </div>
          </div>
        </StyledCouponGift>

        <div className="btn-wrap">
          <div className="btn">
            <Button size="large">MUA NGAY</Button>
          </div>
          <div className="btn">
            <Button size="large" variant="outline" textColor={colors.primaryColor}>
              THÊM VÀO GIỎ HÀNG
            </Button>
          </div>
        </div>
        <Divider size="small" type="dashed" margin="20px 0" />
        <StyledPromote>
          <div className="title">Khuyến mãi liên quan</div>
          <ul className="list">
            <li className="item">
              Nhập mã
              <span className="voucher">PHONGVU300K</span>
              giảm thêm 3% tối đa
              <span className="promote-up">300.000đ</span>
              khi thanh toán qua VNPAY-QR.
              <a href="help.phongvu-clone.netlify" className="link">
                Xem chi tiết
              </a>
            </li>
            <li className="item">
              Nhập mã
              <span className="voucher">PHONGVU300K</span>
              giảm thêm 3% tối đa
              <span className="promote-up">300.000đ</span>
              khi thanh toán qua VNPAY-QR.
              <a href="help.phongvu-clone.netlify" className="link">
                Xem chi tiết
              </a>
            </li>
          </ul>
        </StyledPromote>
        <StyledAdvertise>
          <Link href="#1">
            <a className="banner-item">
              <img
                src={`/access/banner-ngan-4/banner-n11.jpg`}
                alt=""
                className="banner-item__img"
              />
            </a>
          </Link>
          <Link href="#1">
            <a className="banner-item">
              <img
                src={`/access/banner-ngan-4/banner-n12.jpg`}
                alt=""
                className="banner-item__img"
              />
            </a>
          </Link>
        </StyledAdvertise>
      </StyledOverview>
    </StyledProductOverview>
  );
};

export default ProductOverview;
