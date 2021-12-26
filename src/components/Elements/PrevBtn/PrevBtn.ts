import { colors } from '@theme/colors';
import styled from "styled-components";

export const StyledPrevBtn = styled.div`
  width: 50px;
  height: 40px;
  background-color: ${colors.bannerBtnBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  z-index: 1;
  cursor: pointer;

  & .icon {
      color: ${colors.whiteColor};
      font-size: 25px;
    }
`