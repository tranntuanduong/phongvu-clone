import styled from 'styled-components';
import PrevBtn from '../PrevBtn';

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <StyledCustomPrevArrow onClick={onClick} className="carousel-btn">
      <PrevBtn />
    </StyledCustomPrevArrow>
  );
};

const StyledCustomPrevArrow = styled.div`
  display: none;
`;

export default CustomPrevArrow;
