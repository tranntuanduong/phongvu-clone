import Dialog from '@components/Elements/Dialog';
import Paper from '@components/Elements/Paper';
import useOnClickOutside from 'hooks/useOnclickOutside';
import { useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import GlobalScrollStyle from 'styles/GlobalScrollStyle';
import ProductSpecificationsDetails from './ProductSpecificationsDetails';
import { StyledSpecifications } from './Specifications';

const ProductSpecifications = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const ref = useRef(null);

  const handleToggleDialogDetails = () => {
    setOpenDetails(!openDetails);
  };

  const handleCloseDialogDetails = (event: Event) => {
    setOpenDetails(false);
  };

  useOnClickOutside(ref, handleCloseDialogDetails);

  return (
    <StyledSpecifications>
      {openDetails && <GlobalScrollStyle />}
      <div className="title">Thông tin chi tiết</div>
      <div className="short-list">
        <ProductSpecificationsDetails />
      </div>
      <div className="readmore" onClick={handleToggleDialogDetails}>
        Xem thêm nội dung
        <BiChevronDown className="icon" />
      </div>
      {openDetails && (
        <Dialog>
          <Paper borderRadius="10px">
            <div className="dialog" ref={ref}>
              <div className="header">Thông số kĩ thuật</div>
              <div className="dialog-content">
                <ProductSpecificationsDetails />
              </div>
            </div>
          </Paper>
        </Dialog>
      )}
    </StyledSpecifications>
  );
};

export default ProductSpecifications;
