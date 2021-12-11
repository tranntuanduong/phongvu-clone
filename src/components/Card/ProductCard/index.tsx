import { StyledProductCard } from "./ProductCard"
import Link from 'next/Link'

interface Product {
  backgroundImage: string,
  backgroundPosition: string,
  title: string,
  quantity: number,
  promotePrice: number,
  originPrice: number,
}

interface Props {
  product: Product
}

const ProductCard = (props: Props) => {
  const {
    backgroundImage,
    backgroundPosition,
    title,
    quantity,
    promotePrice,
    originPrice
  } = props.product;

  return (
    <StyledProductCard>
      <Link href="#product">
        <a className="link">
          <div
            className="thumb"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              height: "145px",
              backgroundPosition: backgroundPosition
            }}
          >
          </div>
          <div className="save-tag">
            <div className="label">
              Tiết kiệm
            </div>
            <div className="number">{originPrice - promotePrice}đ</div>
          </div>
          <h3 className="title">{title}</h3>
          <div className="quantity">Còn {quantity} sản phẩm</div>
          <div className="promote-price">{promotePrice}đ</div>
          <div className="origin-price-wrap">
            <div className="origin-price">{originPrice}đ</div>
            <div className="promote-percen">-{Math.round(promotePrice * 100 / originPrice)}%</div>
          </div>
        </a>
      </Link>
    </StyledProductCard>
  )
}

export default ProductCard;