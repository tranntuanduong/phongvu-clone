import TopContact from '@components/Contact/TopContact';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { ReactNode } from 'react';
import { StyledContainer } from './Container';

interface ContaierProps {
  children?: ReactNode;
  backgroundColor?: string
}

function Container(props: ContaierProps) {
  const { children, backgroundColor } = props;
  return (
    <StyledContainer
      theme={{ backgroundColor: backgroundColor }}
    >
      {children}
    </StyledContainer>
  )
}

export default Container;
