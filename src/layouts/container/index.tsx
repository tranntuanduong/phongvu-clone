import TopContact from '@components/Contact/TopContact';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { SxProps } from '@theme/type';
import { ReactNode } from 'react';
import { StyledContainer } from './Container';



interface ContaierProps {
  children?: ReactNode;
  backgroundColor?: string;
  mt?: string
}


function Container(props: ContaierProps) {
  const { children, backgroundColor, mt } = props;
  return (
    <StyledContainer
      theme={{ backgroundColor: backgroundColor, marginTop: mt }}
    >
      {children}
    </StyledContainer>
  )
}

export default Container;
