
import { StyledProductCardGeneral } from './ProductCardGeneral'
import Link from 'next/link';

interface Props {
  backgroundImage: string;
  backgroundPosition: string;
  title: string;
  subtitle: string;
}

export const ProductCardGeneral = (props: Props) => {
  const { backgroundImage, backgroundPosition, title, subtitle } = props
  return (
    <StyledProductCardGeneral>
      <Link href="#">
        <a className="link">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="thumb"
            style={{
              backgroundImage: `url(${backgroundImage})`,

              backgroundPosition: backgroundPosition
            }} >
          </div>
        </a>
      </Link>
    </StyledProductCardGeneral>
  )
}

export default ProductCardGeneral;