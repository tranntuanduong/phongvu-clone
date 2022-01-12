import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

// export const StyledBannerWrapper = styled.div`
//   position: relative;
//   padding: ${(props) => props.title && '16px'};
//   background-color: ${(props) => props.title && colors.whiteColor};
//   border-radius: 10px;
//   & .banner-title {
//     font-size: ${fontSizes.subtitle};
//     font-weight: bold;
//     color: ${colors.text};
//     margin-bottom: 20px;
//   }
// `;

// export const StyledShortBanner = styled.div`
//   z-index: 2;
//   height: 100%;
//   display: grid;
//   /* grid-template-columns: repeat(4, 1fr); */
//   grid-auto-flow: column;
//   gap: 8px;

//   & .banner-item {
//     height: 140px;
//     display: block;

//     &__img-wrap {
//       width: 100%;
//       height: 100%;
//       overflow: hidden;
//       border-radius: 10px;
//     }

//     &__img {
//       height: 100%;
//       width: 100%;
//       object-fit: cover;
//       border-radius: 10px;
//       transition: 0.2s ease 0s;

//       &:hover {
//         transform: scale(1.05);
//       }
//     }
//   }

//   & .banner-item__name {
//     font-size: ${fontSizes.body1};
//     font-weight: 600;
//     color: ${colors.text};
//     text-decoration: none;
//     text-align: center;
//     padding-top: 16px;
//   }
// `;

export const StyledBannerWrap = styled.div`
  position: relative;
  padding: ${(props) => props.title && '16px'};
  background-color: ${(props) => props.title && colors.whiteColor};
  border-radius: 10px;

  & .banner-title {
    font-size: ${fontSizes.subtitle};
    font-weight: bold;
    color: ${colors.text};
    margin-bottom: 20px;
  }

  & .banner-item ~ & .banner-item {
    padding-right: 16px;
  }

  &:hover .carousel-btn {
    display: block;
  }
`;

export const StyledBannerItem = styled.div`
  width: 100%;

  & .banner-item {
    height: 140px;
    padding: 0 8px;

    display: block;

    &__img-wrap {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 10px;
    }

    & .banner-img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
      transition: 0.2s ease 0s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  & .banner-item__name {
    font-size: ${fontSizes.body1};
    font-weight: 600;
    color: ${colors.text};
    text-decoration: none;
    text-align: center;
    padding-top: 16px;
  }
`;
