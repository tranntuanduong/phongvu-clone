/* eslint-disable react/display-name */
import Dialog from '@components/Elements/Dialog';
import Paper from '@components/Elements/Paper';
import { forwardRef } from 'react';
import styled from 'styled-components';

interface Props {}

const ContactMailDialog = forwardRef<HTMLDivElement, Props>((_props, ref) => {
  return (
    <Dialog>
      <div ref={ref}>
        <Paper borderRadius="10px" padding="16px">
          <StyledContactMailDialog>Mail</StyledContactMailDialog>
        </Paper>
      </div>
    </Dialog>
  );
});

const StyledContactMailDialog = styled.div``;

export default ContactMailDialog;
