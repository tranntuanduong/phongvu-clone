
import ProductCardGeneral from '@components/Card/ProductCardGeneral';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import { StyledGeneralBanner, StyledGeneralBannerWrap } from './GeneralBanner';


interface Product {
  thumb: string;
  backgroundPosition: string;
  title: string;
  subtitle: string
}

interface GeneralBanner {
  title: string;
  link: string;
  advertise: string;
  products: Product[];
}

interface Props {
  generalBanners: GeneralBanner[]
}

const GeneralBanner = (props: Props) => {
  const { generalBanners } = props
  return (
    <StyledGeneralBannerWrap>
      {generalBanners.map((item, index) => (
        <StyledGeneralBanner key={index} className="general">
          <div className="general-top">
            <h3 className="general-top__title">{item.title}</h3>
            <Link href={item.link}>
              <a className="general-top__link">
                Xem tất cả
                <BiChevronRight className="general-top__icon" />
              </a>
            </Link>
          </div>
          <div className="general-content">
            <div className="content-left">
              <Link href="#">
                <a >
                  <img
                    src={item.advertise}
                    alt=""
                    className="content-left__img" />
                </a>
              </Link>
            </div>
            <div className="content-right">
              {item.products.map((product, index) => (
                <ProductCardGeneral
                  key={index}
                  backgroundImage={product.thumb}
                  backgroundPosition={product.backgroundPosition}
                  title={product.title}
                  subtitle={product.subtitle}
                />
              ))}
            </div>
          </div>
        </StyledGeneralBanner>
      ))}
    </StyledGeneralBannerWrap>
  )
}

export default GeneralBanner