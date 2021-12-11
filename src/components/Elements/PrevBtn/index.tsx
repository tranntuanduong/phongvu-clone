import { BiChevronLeft } from 'react-icons/bi'
import { StyledPrevBtn } from './PrevBtn';

const PrevBtn = () => {
  return (
    <StyledPrevBtn >
      <BiChevronLeft className="icon" />
    </StyledPrevBtn>
  )
}

export default PrevBtn;