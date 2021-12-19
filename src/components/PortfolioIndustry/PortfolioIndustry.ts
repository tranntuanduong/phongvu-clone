import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';
import { StyledBox } from 'styles';

export const StyledProductPortfolio = styled(StyledBox)`
  z-index: 2;
  background-color: ${colors.whiteColor};
  margin-top: 20px;
  max-width: 200px;
  position: relative;

  & .intrustry-list {
    color: ${colors.whiteColor};
    padding: 4px 0;
  }

  & .industry-item {
    display: flex;
    padding: 4px 8px;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: ${colors.whitesmoke};
      border-radius: 10px;
    }

    &__icon {
      color: ${colors.textGrey};
      font-size: 24px;
      margin-right: 8px;
    }

    &__name {
      color: ${colors.text};
      font-size: ${fontSizes.desc2};
      width: 100%;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & .industry-category {
      display: none;
    }

    &:hover .industry-category {
      display: block;
    }
  }
`;


export const StyledIndustryCategory = styled.div`
  padding: 16px;
  background-color: ${colors.whiteColor};
  border-radius: 10px;
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: 212px;
  width: 974px; //1216px - 200px - 8px - 2 * 16px
  /* overflow: hidden; */

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 20px;
    top: 0;
    left: -16px;
  }
`

export const StyledSubCatagory = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;

  & .sub-category-item {
    color: ${colors.text};
    font-size: ${fontSizes.body2};
    padding: 4px 0;
    cursor: pointer;
  }

  & .sub-category-item.title {
    color: ${colors.primaryColor};
    font-weight: bold;
    font-size: ${fontSizes.body1};
    margin: 20px 20px 10px 0;
    min-width: 150px;
  }

  & .sub-category-item:first-child {
    margin-top: 0
  }

  & .category-advertise {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    & img {
      height: 100%;
      width: auto;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`