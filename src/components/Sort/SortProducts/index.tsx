import Chip from "@components/Elements/Chip";
import { StyledSortProducts } from "@components/ProductList/ProductList";
import { GoDash } from 'react-icons/go';

const SortProducts = () => {
  return (
    <StyledSortProducts>
      <div className="sort-title">
        Sắp xếp theo
      </div>
      <div className="sort-list">
        <Chip mr="16px" name="Khuyến mãi tốt nhất" />
        <Chip mr="16px" name="Bán chạy" active />
        <Chip mr="16px" name="Mới về" />
        <Chip mr="16px" name="Giá giảm dần" />
        <Chip mr="16px" name="Giá tăng dần" />
        <div className="chip-wrap">
          <Chip mr="8px" name="Giá thấp nhất" />
          <div className="dash">
            <GoDash />
          </div>
          <Chip mr="8px" name="Giá cao nhất" />
        </div>
      </div>
    </StyledSortProducts>
  )
}

export default SortProducts;