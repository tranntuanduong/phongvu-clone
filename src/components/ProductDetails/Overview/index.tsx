import Button from '@components/Elements/Button';
import { useState } from 'react';
import {
  StyledAdvertise,
  StyledImageConllection,
  StyledOverview,
  StyledProductOverview,
  StyledPromote,
} from './ProductOverview';
import Link from 'next/link';

const ProductOverview = () => {
  return (
    <StyledProductOverview>
      <StyledImageConllection>
        <div
          className="main"
          style={{
            backgroundImage: `url("/access/products/card/2.jpg")`,
          }}
        />
        <div className="list">
          <div
            className="item"
            style={{
              backgroundImage: `url("/access/products/card/1.jpg")`,
            }}
          />
          <div
            className="item item--active"
            style={{
              backgroundImage: `url("/access/products/card/2.jpg")`,
            }}
          />
          <div
            className="item"
            style={{
              backgroundImage: `url("/access/products/card/3.jpg")`,
            }}
          />
          <div
            className="item"
            style={{
              backgroundImage: `url("/access/products/card/4.jpg")`,
            }}
          />
          <div
            className="item"
            style={{
              backgroundImage: `url("/access/products/card/5.jpg")`,
            }}
          />
        </div>
        <div className="hr" />
        <ul className="sub-info">
          <li className="sub-info__item">- Chip đồ họa: GeForce RTX 3080Ti</li>
          <li className="sub-info__item">- Bộ nhớ: 12GB GDDR6X (384-bit)</li>
          <li className="sub-info__item">- Boost: 1695 MHz</li>
          <li className="sub-info__item">- Nguồn phụ: 2 x 8-pin</li>
        </ul>
      </StyledImageConllection>

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
        <div className="btn-wrap">
          <div className="btn">
            <Button size="large">MUA NGAY</Button>
          </div>
          <div className="btn">
            <Button size="large" variant="outline">
              THÊM VÀO GIỎ HÀNG
            </Button>
          </div>
        </div>
        <div className="hr" />
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
