import { colors } from "@theme/colors";
import styled from "styled-components";

export const StyledMainSlider = styled.div`
    width: 100%;
    height: 566px;
    position: relative;

    & .top {
        display: flex;
        height: 100%;
    }

    & .banner {
        flex: 1;

        &__img {
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        &__btn-prev {
            position: absolute;
            top: 20px;
            left: 0;
            z-index: 1;
        }

        &__btn-next {
            position: absolute;
            top: 20px;
            right: 0;
            z-index: 1;
        }

        &__btn-icon {
            color: ${colors.whiteColor};
        }
    }
    
  
`


export const StyledRightAdvertise = styled.div`
    margin-top: 20px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    & .ad-img {
        width: 100%;
        max-height: 250px;
        object-fit: cover;
        border-radius: 5px;
    }
`

export const StyledBottomAdvertise = styled.div`
    color: "#fff";
    z-index: 1;
`