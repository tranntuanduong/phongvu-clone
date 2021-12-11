import styled from "styled-components";

export const StyledShortBanner = styled.div`
  z-index: 2;
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 -8px;

  & .banner-item {
    height: 140px;
    padding: 0 8px;

    &__img-wrap {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 10px;

    }

    &__img {

      height: 100%;
      width: 100%;
      border-radius: 10px;
      transition: 0.2s ease 0s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
 
`