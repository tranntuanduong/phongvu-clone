import { StyledProductSlider } from './ProductSlider';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '@components/Card/ProductCard';
import { promoteBanner } from 'dummydata';
import CustomPrevArrow from '@components/Elements/CustomArrowBtn/CustomPrevArrow';
import CustomNextArrow from '@components/Elements/CustomArrowBtn/CustomNextArrow';

const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: <CustomPrevArrow />, //onClick pass from nextArrow custom, it automatic
  nextArrow: <CustomNextArrow />,
};

const ProductSlider = () => {
  return (
    <StyledProductSlider>
      <div className="header">
        <div className="title">Cùng thương hiệu ASUS</div>
        <Link href="#">
          <a className="link">
            Xem tất cả
            <BiChevronRight className="link-icon" />
          </a>
        </Link>
      </div>
      <ul className="list">
        <Slider {...settings}>
          {promoteBanner.map((product, index) => (
            <li key={index}>
              <div className="card">
                <ProductCard product={product} />
              </div>
            </li>
          ))}
        </Slider>
      </ul>
    </StyledProductSlider>
  );
};

export default ProductSlider;
