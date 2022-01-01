import { fontSizes } from '@theme/fontSizes';
import { colors } from '@theme/colors';
import styled from 'styled-components';

export const StyledFooterWrap = styled.div`
  border-top: 3px solid ${colors.primaryColor};
  background-color: ${colors.whiteColor};
  position: relative;

  & .version {
    bottom: 10px;
    right: 10px;
    color: ${colors.textGrey};
    position: fixed;
  }

  .wrap {
    /* width: 1216px; */
    width: 100%;
    max-width: 1216px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    margin-top: 8px;
    gap: 20px;

    &.w-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    &.w-2 {
      grid-template-columns: 1fr 1fr;
    }

    & .w-3-6 {
      grid-column: 3 / 6;
      width: 100%;
    }

    & .w-1-3 {
      grid-column: 1 / 3;
      width: 100%;
    }

    & .banking {
      width: 100%;
    }
  }
`;

export const StyledFooter = styled.div`
  padding: 25px 16px 16px 16px;
`;

export const StyledFooterColumn = styled.div`
  width: max-content;

  & .title {
    font-size: ${fontSizes.body2};
    color: ${colors.text};
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  & .list--row-direction {
    display: flex;
  }

  & .row {
    padding: 8px 0;
    font-size: ${fontSizes.desc2};
    color: ${colors.text};
    display: flex;
    line-height: 1.5;

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

    &.column-center {
      align-items: center;
    }

    &.column-start {
      align-items: flex-start;
    }

    & .purchase-icon {
      font-size: 30px;
      margin-bottom: 8px;
    }

    & .row-title {
      margin-bottom: 5px;
      font-weight: 600;
    }
  }
`;

export const StyledBottomFooter = styled.div`
  background-color: ${colors.footerBackground};
  padding-bottom: 40px;
`;
