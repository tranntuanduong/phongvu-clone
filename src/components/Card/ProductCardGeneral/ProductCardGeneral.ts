import { colors } from '@theme/colors';
import { fontSizes } from "@theme/fontSizes";
import styled from "styled-components";

export const StyledProductCardGeneral = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  
  & .link {
    color: ${colors.text};
    text-decoration: none;
  }

  & .title {
    font-size: ${fontSizes.body1};
    font-weight: 600;
  }

  & .subtitle {
    font-size: ${fontSizes.desc1};
    margin-top: 8px;
  }
 

  & .thumb {
    height: 100px;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`