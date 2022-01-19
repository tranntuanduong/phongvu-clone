import { StyledProductCard } from './ProductCard';
import Link from 'next/link';
import FreeShipIcon from '@components/SvgIcon/FreeShip';
import PresentIcon from '@components/SvgIcon/PresentIcon';
import { formatCurrency } from 'utils';

interface Product {
  backgroundImage: string;
  backgroundPosition: string;
  title: string;
  quantity: number;
  promotePrice: number;
  originPrice: number;
}

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { backgroundImage, backgroundPosition, title, quantity, promotePrice, originPrice } =
    props.product;

  return (
    <StyledProductCard>
      <Link href="/card-man-hinh-vga-msi-rtx-3080-ti-ventus-3x-12g-oc--s210601911?sku=210601911">
        <a className="link">
          <div className="thumb-wrap">
            <div
              className="thumb"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                // height: "145px",
                backgroundPosition: backgroundPosition,
              }}
            ></div>
            {originPrice - promotePrice > 0 && (
              <div className="save-tag">
                <div className="label">Tiết kiệm</div>
                <div className="number">{formatCurrency(originPrice - promotePrice)}</div>
              </div>
            )}
          </div>

          <h3 className="title">{title}</h3>
          <div className="quantity">Còn {quantity} sản phẩm</div>
          <div className="wrap">
            <div className="promote-price">{formatCurrency(promotePrice)}</div>
            <FreeShipIcon />
          </div>
          <div className="origin-price-wrap">
            <div className="origin-price">{formatCurrency(originPrice)}</div>
            <div className="promote-percen">-{Math.round((promotePrice * 100) / originPrice)}%</div>
          </div>
          <div className="present">
            <PresentIcon />
          </div>
        </a>
      </Link>
    </StyledProductCard>
  );
};

export default ProductCard;
