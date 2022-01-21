import Chip from '@components/Elements/Chip';
import TextField from '@components/Form/TextField';
import { StyledSortProducts } from '@components/ProductList/ProductList';
import { GoDash } from 'react-icons/go';

const SortBuildPcElectronic = () => {
  return (
    <StyledSortProducts>
      <div className="sort-title--buildPc">Sắp xếp theo:</div>
      <div className="sort-list">
        <Chip mr="16px" name="Khuyến mãi tốt nhất" />
        <Chip mr="16px" name="Bán chạy" active />
        <Chip mr="16px" name="Mới về" />
      </div>
      <div className="search">
        <TextField placeholder="Tìm linh kiện" />
      </div>
    </StyledSortProducts>
  );
};

export default SortBuildPcElectronic;
