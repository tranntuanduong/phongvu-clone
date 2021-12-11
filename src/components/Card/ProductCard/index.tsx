import { StyledProductCard } from "./ProductCard"
import Link from 'next/Link'

const ProductCard = () => {
  return (
    <StyledProductCard>
      <Link href="#product">
        <a className="link">
          <div
            className="thumb"
            style={{
              backgroundImage: `url("/access/products/manhinh/screen1.jpg")`,
              height: "145px",
              backgroundPosition: "4px -15px"
            }}
          >
          </div>
          <div className="save-tag">
              <div className="label">
                Tiết kiệm
              </div>
              <div className="number">19.000đ</div>
            </div>
          <h3 className="title">Laptop HP VICTUS 16-e0170AX 4R0U7PA router wifi</h3>
          <div className="quantity">Còn 1 sản phẩm</div>
          <div className="promote-price">431.100đ</div>
          <div className="origin-price-wrap">
            <div className="origin-price">450.100đ</div>
            <div className="promote-percen">-4.22%</div>
          </div>
        </a>
      </Link>
    </StyledProductCard>
  )
}

export default ProductCard;