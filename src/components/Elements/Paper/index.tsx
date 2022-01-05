import { FC } from 'react';
import { StyledPaper } from './Paper';

interface Props {
  borderRadius?: string;
}

const Paper: FC<Props> = ({ borderRadius, children }) => {
  return (
    <StyledPaper theme={{borderRadius: borderRadius}}>{children}</StyledPaper>
  );
};

export default Paper;
