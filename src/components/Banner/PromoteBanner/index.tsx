import { StyledProductList, StyledPromoteBanner } from './PromoteBanner';
import { BiChevronRight } from 'react-icons/bi';
import Link from 'next/link';
import ProductCard from '@components/Card/ProductCard';
import PrevBtn from '@components/Elements/PrevBtn';
import NextBtn from '@components/Elements/NextBtn';
import { useEffect, useState } from 'react';

interface Product {
  backgroundImage: string;
  backgroundPosition: string;
  title: string;
  quantity: number;
  promotePrice: number;
  originPrice: number;
}

const promoteBanner: Product[] = [
  {
    backgroundImage: '/access/products/manhinh/screen1.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 1',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/manhinh/screen2.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 2',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/manhinh/screen3.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 3',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/manhinh/screen4.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 4',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/manhinh/screen5.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 5',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/giadung/giadung1.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 6',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/giadung/giadung2.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 6',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/giadung/giadung3.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 6',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/giadung/giadung4.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 6',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/giadung/giadung5.jpg',
    backgroundPosition: '4px -15px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 6',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/dongho/dongho1.jpg',
    backgroundPosition: '4px -6px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 6',
    quantity: 1,
    promotePrice: 431000,
    originPrice: 450000,
  },
  {
    backgroundImage: '/access/products/dongho/dongho1.jpg',
    backgroundPosition: '4px -6px',
    title: 'Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi 6',
    quantity: 1000,
    promotePrice: 431000,
    originPrice: 450000,
  },
];

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
        <div className="promotion-time">
          <div className="promotion-time__title">
            Kết thúc sau <span>4</span> ngày
          </div>
          <div className="promotion-time__block">
            <div className="promotion-time__block-item">09</div>
            <div className="promotion-time__block-item">04</div>
            <div className="promotion-time__block-item">59</div>
          </div>
        </div>
        <Link href="#viewall">
          <a className="view-all">
            Xem tất cả
            <BiChevronRight className="view-all__icon" />
          </a>
        </Link>

        <div className="product-list-wrap">
          <div className="product-list-wrap__carousel-btn" onClick={prevPageHandler}>
            <PrevBtn />
          </div>
          <StyledProductList theme={{ translateX: `${translateX}px` }}>
            {promoteBanner.map((product, index) => (
              <li key={index} className="product-item">
                <ProductCard product={product} />
              </li>
            ))}
          </StyledProductList>
          <div className="product-list-wrap__carousel-btn" onClick={nextPageHandler}>
            <NextBtn />
          </div>
        </div>
      </div>
    </StyledPromoteBanner>
  );
};

export default PromoteBanner;
