import { FC } from 'react';
import { StyledDialog } from './Dialog';



const Dialog: FC = ({children} ) => {

  return (
      <StyledDialog>
        {children}
      </StyledDialog>
  );
};

export default Dialog;
