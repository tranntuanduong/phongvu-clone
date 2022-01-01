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
      padding: 8px 16px;
      border: 1px solid ${colors.border};
      border-radius: 5px;
      height: fit-content;
      margin-right: 8px;
      margin-bottom: 10px;

      &:hover {
        cursor: pointer;
        background-color: ${colors.whitesmoke};
      }
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