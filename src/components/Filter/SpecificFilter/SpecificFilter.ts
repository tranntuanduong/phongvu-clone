import { colors } from './../../../theme/colors';
import { fontSizes } from '@theme/fontSizes';
import styled from 'styled-components';

export const StyledSpecificFilter = styled.ul`
  display: flex;
  margin-top: 8px;
  position: relative;
  padding-right: 60px;


  & .filter-title {
    padding-right: 16px; 
    width: 150px;
    font-size: ${fontSizes.body2};
    color: ${colors.text};
    font-weight: 600;
    height: 40px;
  }

  

  & .list-chip {
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
    }
  }

  & .readmore-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border: 1px solid ${colors.border};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    
    &:hover {
      background-color: ${colors.whitesmoke};
      cursor: pointer;
    }
  }
`