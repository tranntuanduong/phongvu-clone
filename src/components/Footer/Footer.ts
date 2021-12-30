import { fontSizes } from '@theme/fontSizes';
import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledFooter = styled.div`
  border-top: 3px solid ${colors.primaryColor};
  padding: 25px 16px 16px 16px;
  background-color: ${colors.whiteColor};

  .wrap {
    width: 1216px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    margin-top: 8px;

    & .w-3-5 {
      grid-column: 3 / 5;
    }

    &.w-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    & .w-1-3 {
      grid-column: 1 / 3;
    }

    & .banking {
      width: 90%;
    }
  }
`;

export const StyledFooterColumn = styled.div`
  width: max-content;

  & .title {
    font-size: ${fontSizes.body2};
    color: ${colors.text};
    font-weight: 600;
    margin-bottom: 20px;
  }

  & .list--row-direction {
    display: flex;
  }

  & .row {
    padding: 8px 0;
    font-size: ${fontSizes.desc2};
    color: ${colors.text};
    display: flex;
    align-items: center;

    & .icon {
      font-size: 16px;
      margin-right: 4px;
    }

    & .hotline {
      color: ${colors.hotline};
      font-weight: 600;
      margin: 0 4px;
    }

    & .link-wrap {
      display: flex;
      flex-direction: column;

      & .link {
        margin-top: 8px;
        color: ${colors.primaryColor};
        text-decoration: none;
      }
    }

    &.column-direction {
      flex-direction: column;
      margin-right: 16px;
    }

    & .purchase-icon {
      font-size: 30px;
      margin-bottom: 8px;
    }
  }
`;
