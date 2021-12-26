import { colors } from '@theme/colors';
import styled from "styled-components";

export const StyledNextBtn = styled.div`
    width: 50px;
    height: 40px;
    background-color: ${colors.bannerBtnBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    z-index: 1;

    & .icon {
      color: ${colors.whiteColor};
      font-size: 25px;
    }
`