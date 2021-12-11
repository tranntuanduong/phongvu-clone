import { StyledProductList, StyledPromoteBanner } from "./PromoteBanner";
import { BiChevronRight } from 'react-icons/bi';
import Link from 'next/Link';
import ProductCard from "@components/Card/ProductCard";
const PromoteBanner = () => {
  return (
    <StyledPromoteBanner>
      <ul className="tab">
        <li
          className="tab-item">
          <div className="tab-item__title">Deal sốc cuối năm</div>
          <div className="tab-item__subtitle">Giảm đến 49%++</div>
        </li>
        <li
          className="tab-item tab-item--active"
          style={{
            backgroundColor: '#103c86',
          }}
        >
          <div className="tab-item__title">Máy móc bosch</div>
          <div className="tab-item__subtitle">Giảm đến 49%++</div>
        </li>
        <li className="tab-item">
          <div className="tab-item__title">Thiết bị mạng</div>
          <div className="tab-item__subtitle">Giảm đến 49%++</div>
        </li>
        <li className="tab-item">
          <div className="tab-item__title">Điện gia dụng</div>
          <div className="tab-item__subtitle">Giảm đến 49%++</div>
        </li>
        <li className="tab-item">
          <div className="tab-item__title">Microsoft office</div>
          <div className="tab-item__subtitle">Giảm thêm 100k</div>
        </li>
        <div
          className="tab-item--underlined"
          style={{
            backgroundColor: '#103c86',
          }}
        />
      </ul>
      <div
        className="content"
        style={{
          backgroundImage: `url("/access/banner-promote/banner-promote3.png")`,
          backgroundPosition: "0px -65px"
        }}
      >
        <div className="promotion-time">
          <div className="promotion-time__title">
            Kết thúc sau <span>4</span> ngày
          </div>
          <div className="promotion-time__block">
            <div className="promotion-time__block-item">
              09
            </div>
            <div className="promotion-time__block-item">
              04
            </div>
            <div className="promotion-time__block-item">
              59
            </div>
          </div>
        </div>
        <Link href="#viewall">
          <a className="view-all">
            Xem tất cả
            <BiChevronRight className="view-all__icon" />
          </a>
        </Link>

        <div className="product-list-wrap">
          <StyledProductList>
            <li className="product-item">
              <ProductCard />
            </li>
            <li className="product-item">
              <ProductCard />
            </li>
            <li className="product-item">
              <ProductCard />
            </li>
            <li className="product-item">
              <ProductCard />
            </li>
            <li className="product-item">
              <ProductCard />
            </li>
            <li className="product-item">
              <ProductCard />
            </li>
            <li className="product-item">
              <ProductCard />
            </li>
            <li className="product-item">
              <ProductCard />
            </li>
            <li className="product-item">
              <ProductCard />
            </li>
          </StyledProductList>
        </div>
      </div>

    </StyledPromoteBanner >
  )
}

export default PromoteBanner;