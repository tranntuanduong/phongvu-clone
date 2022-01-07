import NextBtn from '../NextBtn';

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomNextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <div className="product-list-wrap__carousel-btn" onClick={onClick}>
      <NextBtn />
    </div>
  );
};

export default CustomNextArrow;
