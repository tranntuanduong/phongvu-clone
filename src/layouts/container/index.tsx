import TopContact from '@components/Contact/TopContact';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { ReactNode } from 'react';
import { StyledContainer } from './Container';

interface ContaierProps {
  children?: ReactNode;
}

function Container(props: ContaierProps) {
  const { children } = props;
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
