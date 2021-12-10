import styled from "styled-components";

export const StyledShortBanner = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  & .banner-item {
    height: 140px;
    overflow: hidden;
    border-radius: 10px;


    &__img {
      height: 100%;
      border-radius: 10px;
      transition: 0.2s ease 0s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
 
`