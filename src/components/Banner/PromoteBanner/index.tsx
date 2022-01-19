import { StyledProductList, StyledPromoteBanner } from './PromoteBanner';
import { BiChevronRight } from 'react-icons/bi';
import Link from 'next/link';
import ProductCard from '@components/Card/ProductCard';
import PrevBtn from '@components/Elements/PrevBtn';
import NextBtn from '@components/Elements/NextBtn';
import { useEffect, useState } from 'react';
import { promoteBanner } from 'dummydata';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomPrevArrow from '@components/Elements/CustomArrowBtn/CustomPrevArrow';
import CustomNextArrow from '@components/Elements/CustomArrowBtn/CustomNextArrow';
import Countdown, { CountdownRendererFn } from 'react-countdown';
interface Product {
  backgroundImage: string;
  backgroundPosition: string;
  title: string;
  quantity: number;
  promotePrice: number;
  originPrice: number;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: <CustomPrevArrow />, //onClick pass from nextArrow custom, it automatic
  nextArrow: <CustomNextArrow />,
};

const PromoteBanner = () => {
  const [translateX, setTranslateX] = useState(0);
  const [pageSize, setPageSize] = useState(0); //1 page contain 4 products
  const [page, setPage] = useState(0); //page 0 contain 4 first products

  useEffect(() => {
    setPageSize(Math.ceil(promoteBanner.length / 5));
  }, []);

  const nextPageHandler = () => {
    if (page < pageSize - 1) {
      setPage(page + 1);
    }
    // setTranslateX(-400);
  };

  const prevPageHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  // if last page only has 2 or < 5 product => translateX to last product
  useEffect(() => {
    if (page + 1 <= promoteBanner.length / 5) {
      setTranslateX(-page * 5 * 203);
    } else {
      const lastPageSize = Math.ceil(5 * (promoteBanner.length / 5 - page));
      setTranslateX(-(page * 5 * 203) + (5 - lastPageSize) * 203);
    }
  }, [page, pageSize]);

  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className="promotion-time">
        <div className="promotion-time__title">
          Kết thúc sau <span>{days}</span> ngày
        </div>
        <div className="promotion-time__block">
          <div className="promotion-time__block-item">{hours < 10 ? `0${hours}` : hours}</div>
          <div className="promotion-time__block-item">{minutes < 10 ? `0${minutes}` : minutes}</div>
          <div className="promotion-time__block-item">{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>
      </div>
    );
  };

  return (
    <StyledPromoteBanner>
      <ul className="tab">
        <li className="tab-item">
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
          backgroundPosition: '0px -65px',
        }}
      >
        <Countdown date={Date.now() + 500000000} renderer={renderer} />
        <Link href="#viewall">
          <a className="view-all">
            Xem tất cả
            <BiChevronRight className="view-all__icon" />
          </a>
        </Link>

        <div className="product-list-wrap">
          {/* <div className="product-list-wrap__carousel-btn" onClick={prevPageHandler}>
            <PrevBtn />
          </div> */}
          <StyledProductList theme={{ translateX: `${translateX}px` }}>
            <Slider {...settings}>
              {promoteBanner.map((product, index) => (
                <li key={index} className="product-item">
                  <div className="card">
                    <ProductCard product={product} />
                  </div>
                </li>
              ))}
            </Slider>
          </StyledProductList>

          {/* <div className="product-list-wrap__carousel-btn" onClick={nextPageHandler}>
            <NextBtn />
          </div> */}
        </div>
      </div>
    </StyledPromoteBanner>
  );
};

export default PromoteBanner;
