import { colors } from "@theme/colors";
import { fontSizes } from "@theme/fontSizes";
import styled from "styled-components";

export const StyledAccountTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  margin-bottom: 16px;


  & .tabs {
    display: flex;
    font-size: ${fontSizes.body2};
    color: ${colors.textGrey};
    border-radius: 5px;
    overflow: hidden;

    & .item {
      padding: 10px;
      background-color: ${colors.whiteColor};
      cursor: pointer;
    }

    & .item--active {
      background-color: ${colors.border};
      color: ${colors.primaryColor};
    }
  }

  & .title {
    color: ${colors.text};
    font-size: ${fontSizes.subtitle};
    font-weight: 600;
  }
`;

export const StyledFullScreen = styled.div`
  min-height: 70vh;
`;

export const StyledAddAddressBtn = styled.div`
  padding: 16px;
  background-color: ${colors.whiteColor};
  border: 1.5px dashed ${colors.border};
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;


  & .text {
    color: ${colors.primaryColor};
    font-size: ${fontSizes.body2};
  }

  & .icon {
    color: ${colors.textGrey};
    font-size: 20px;
    margin-right: 8px;
  }
`

export const StyledAddressDialog = styled.div`
  padding: 24px;
  background-color: ${colors.whiteColor};
  min-width: 700px;


  & .title {
    margin-bottom: 20px;
    font-size: ${fontSizes.subtitle};
    font-weight: 600;
    color: ${colors.text};
  }

  & .btn-wrap {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
`

export const StyledMyAddress = styled.div`
  background-color: ${colors.whiteColor};
  padding: 16px;
  border-radius: 10px;

  & .top {
    display: flex;
    align-items: center;
  }

  & .title {
    font-size: ${fontSizes.body2};
    color: ${colors.text};
    margin-right: 8px;
    font-weight: 600;
  }

  & .label {
    color: ${colors.primaryColor};
    background-color: ${colors.whitesmoke};
    font-size: ${fontSizes.desc2};
    padding: 4px;
  }

  & .body {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;

    & .wrap {
      flex: 1;
    }

    & .btn {
      min-width: 120px;
      margin-left: 50px;
    }

    & .text {
      color: ${colors.textGrey};
      font-size: ${fontSizes.desc2};
      margin-top: 8px;
      line-height: 1.5;
    }
  }
`