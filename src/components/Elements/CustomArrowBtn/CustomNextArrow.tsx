import styled from 'styled-components';
import NextBtn from '../NextBtn';

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomNextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <StyledCustomPrevArrow onClick={onClick} className="carousel-btn">
      <NextBtn />
    </StyledCustomPrevArrow>
  );
};

const StyledCustomPrevArrow = styled.div`
  display: none;
`;

export default CustomNextArrow;
