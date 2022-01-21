import { colors } from '@theme/colors';
import { fontSizes } from './../../../theme/fontSizes';
import styled from 'styled-components';

export const StyledEnhanceFilterItem = styled.ul`
  &.list-chip--enhance {
    overflow: inherit;
  }

  flex: 1;
  display: flex;
  flex-wrap: wrap;
  height: 42px;
  overflow: hidden;

  &.list-chip--open {
    height: auto;
  }

  &__item {
    font-size: ${fontSizes.body2};
    color: ${colors.text};
    height: fit-content;
  }

  & .sub-filter {
    background-color: ${colors.whiteColor};
    padding: 16px;
    border-radius: 5px;
    border: 1px solid ${colors.primaryColor};
    display: none;
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    z-index: 1;

    & .sub-filter__item {
      margin-right: 16px;
      cursor: pointer;
    }
  }

  & .chip-wrap {
    margin-right: 8px;
    margin-bottom: 10px;
  }

  & .parent-chip {
    position: relative;
    background-color: ${colors.whiteColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  & .chip-wrap:hover .parent-chip {
    border: 1px solid ${colors.primaryColor};
    border-bottom: 1px solid ${colors.whiteColor};
    z-index: 2;
  }

  & .chip-wrap:hover .sub-filter {
    display: flex;
  }
`;
