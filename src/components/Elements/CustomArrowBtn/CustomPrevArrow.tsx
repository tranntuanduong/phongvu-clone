import PrevBtn from '../PrevBtn';

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div className="product-list-wrap__carousel-btn" onClick={onClick}>
      <PrevBtn />
    </div>
  );
};

export default CustomPrevArrow;
