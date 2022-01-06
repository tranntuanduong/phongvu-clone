import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

export const StyledProductCard = styled.div`
  background-color: 'transparent';
  width: 100%;
  position: relative;
  overflow: hidden;

  & .link {
    text-decoration: none;
  }

  & .thumb-wrap {
    position: relative;
  }

  & .thumb {
    background-size: contain;
    background-repeat: no-repeat;
    transition: transform 0.3s;
    width: 100%;
    aspect-ratio: 1;

    &:hover {
      transform: scale(1.05);
    }
  }

  & .save-tag {
    position: absolute;
    bottom: 0;

    background: linear-gradient(
      315deg,
      rgba(136, 0, 255, 1) 6%,
      rgba(166, 0, 255, 1) 33%,
      rgba(161, 68, 237, 1) 64%,
      rgba(102, 68, 237, 1) 96%
    );
    width: fit-content;
    padding: 6px 6px;
    font-weight: bold;
    border-radius: 5px;
  }

  & .label {
    color: ${colors.quantityProduct};
    font-size: ${fontSizes.desc2};
    margin-bottom: 5px;
  }

  & .number {
    color: ${colors.whiteColor};
    font-size: ${fontSizes.desc1};
  }

  & .title {
    font-size: ${fontSizes.desc1};
    line-height: 1.35;
    margin-top: 4px;
    color: ${colors.text};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  & .quantity {
    font-size: ${fontSizes.desc2};
    color: ${colors.quantityProduct};
    margin-top: 2px;
    margin-bottom: 4px;
  }

  & .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .promote-price {
    font-size: ${fontSizes.body1};
    font-weight: bold;
    color: ${colors.primaryColor};
  }

  & .origin-price-wrap {
    display: flex;
    margin: 8px 0;
    font-size: ${fontSizes.desc2};
  }

  & .origin-price {
    color: ${colors.textGrey};
    text-decoration: line-through;
    margin-right: 8px;
  }

  & .promote-percen {
    color: ${colors.primaryColor};
  }

  & .present {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
