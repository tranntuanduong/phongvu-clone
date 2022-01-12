import CustomNextArrow from '@components/Elements/CustomArrowBtn/CustomNextArrow';
import CustomPrevArrow from '@components/Elements/CustomArrowBtn/CustomPrevArrow';
import Link from 'next/link';
import { useMemo } from 'react';
import Slider from 'react-slick';
import { StyledBannerItem, StyledBannerWrap } from './ShortBanner';

interface Image {
  imageUrl: string;
  link: string;
  name?: string;
}

interface Props {
  images: Image[];
  title?: string;
  numberItem: number;
}

const ShortBanner = (props: Props) => {
  const { title, images, numberItem } = props;

  const settings = useMemo(() => {
    return {
      infinite: true,
      speed: 500,
      autoplay: false,
      slidesToShow: numberItem,
      slidesToScroll: numberItem,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };
  }, [numberItem]);

  return (
    // <StyledBannerWrapper title={title}>
    //   {title && <div className="banner-title">{title}</div>}
    //   {images.length > 4 && (
    //     <>
    //       <NextBtn />
    //       <PrevBtn />
    //     </>
    //   )}
    //   <StyledShortBanner>
    //     {images.slice(0, 4).map((image, index) => (
    //       <div key={index}>
    //         <Link href={`#${index}`}>
    //           <a className="banner-item">
    //             <div className="banner-item__img-wrap">
    //               <img
    //                 src={`/access/banner-ngan-4/${image.imageUrl}`}
    //                 alt=""
    //                 className="banner-item__img"
    //               />
    //             </div>
    //           </a>
    //         </Link>
    //         {image.name && <div className="banner-item__name">{image.name}</div>}
    //       </div>
    //     ))}
    //   </StyledShortBanner>
    // </StyledBannerWrapper>
    <StyledBannerWrap title={title}>
      {title && <div className="banner-title">{title}</div>}
      <Slider {...settings}>
        {images.map((image, index) => (
          <StyledBannerItem key={index}>
            <Link href={`#${index}`}>
              <a className="banner-item">
                <div className="banner-item__img-wrap">
                  <img
                    className="banner-img"
                    src={`/access/banner-ngan-4/${image.imageUrl}`}
                    alt=""
                  />
                </div>
              </a>
            </Link>
            {image.name && <div className="banner-item__name">{image.name}</div>}
          </StyledBannerItem>
        ))}
      </Slider>
    </StyledBannerWrap>
  );
};

export default ShortBanner;
