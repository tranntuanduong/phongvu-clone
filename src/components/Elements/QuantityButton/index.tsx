import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { colors } from "@theme/colors";
import { fontSizes } from "@theme/fontSizes";
import { useState } from "react";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (number: number) => () => {
    if (quantity === 0 && number < 0) {
      setQuantity(0)
    } else {
      setQuantity(quantity + number)
    }
  }

  return (
    <StyledQuantityButton>
      <AiOutlineMinus className="btn" onClick={handleChangeQuantity(-1)} />
      <div className="quantity">
        {quantity}
      </div>
      <AiOutlinePlus className="btn" onClick={handleChangeQuantity(1)} />
    </StyledQuantityButton>
  )
}

const StyledQuantityButton = styled.div`
  min-width: 120px;
  padding: 8px;
  background-color: ${colors.whitesmoke};
  border: 1px solid ${colors.border};
  border-radius: 5px;
  color: ${colors.textGrey};
  user-select: none;

  display: flex;
  justify-content: space-between;

  & .quantity {
    font-size: ${fontSizes.body1};
    color: ${colors.text};
  }

  & .btn {
    cursor: pointer;
  }
`

export default QuantityButton;