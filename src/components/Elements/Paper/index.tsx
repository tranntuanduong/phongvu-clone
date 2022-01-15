import { FC } from 'react';
import { StyledPaper } from './Paper';

interface Props {
  borderRadius?: string;
  padding?: string;
}

const Paper: FC<Props> = ({ borderRadius, padding, children }) => {
  return (
    <StyledPaper theme={{ borderRadius: borderRadius, padding: padding }}>{children}</StyledPaper>
  );
};

export default Paper;
