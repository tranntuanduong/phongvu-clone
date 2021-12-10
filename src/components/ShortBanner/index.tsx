import { StringifyOptions } from "querystring";
import { StyledShortBanner } from "./ShortBanner";
import Link from 'next/Link'

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
    <StyledShortBanner>
      {images.slice(0, 4).map((image, index) => (
        <Link key={index} href={`#${index}`}>
          <a className="banner-item">
            <img src={`/access/banner-ngan-4/${image.imageUrl}`} alt="" className="banner-item__img" />
          </a>
        </Link>
      ))}

    </StyledShortBanner>
  )
}

export default ShortBanner;