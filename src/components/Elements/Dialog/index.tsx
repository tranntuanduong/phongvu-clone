import { FC, LegacyRef, ReactNode } from 'react';
import { StyledDialog } from './Dialog';

interface Props {
  children: ReactNode;
}

const Dialog = (props: Props) => {
  const { children } = props;
  return (
    <StyledDialog>
      {children}
    </StyledDialog>
  );
};

export default Dialog;
