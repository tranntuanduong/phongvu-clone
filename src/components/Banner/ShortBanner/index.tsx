import { StringifyOptions } from "querystring";
import { StyledBannerWrapper, StyledShortBanner } from "./ShortBanner";
import Link from 'next/link'
import NextBtn from "@components/Elements/NextBtn";
import PrevBtn from "@components/Elements/PrevBtn";

interface Image {
  imageUrl: string,
  link: string,
  name?: string
}

interface Props {
  images: Image[],
  title?: string
}

const ShortBanner = (props: Props) => {
  const { title, images } = props
  return (
    <StyledBannerWrapper title={title}>
      <div className="banner-title">{title}</div>
      {images.length > 4 && (
        <>
          <NextBtn />
          <PrevBtn />
        </>
      )}
      <StyledShortBanner>

        {images.slice(0, 4).map((image, index) => (
          <div key={index}>
            <Link href={`#${index}`}>
              <a className="banner-item">
                <div className="banner-item__img-wrap">
                  <img src={`/access/banner-ngan-4/${image.imageUrl}`} alt="" className="banner-item__img" />
                </div>
              </a>
            </Link>
            {image.name && (
              <div className="banner-item__name">{image.name}</div>
            )}
          </div>
        ))}
      </StyledShortBanner>
    </StyledBannerWrapper>
  )
}

export default ShortBanner;