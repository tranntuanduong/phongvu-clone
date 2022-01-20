/* eslint-disable react/display-name */
import Dialog from '@components/Elements/Dialog';
import Paper from '@components/Elements/Paper';
import { forwardRef } from 'react';
import styled from 'styled-components';

interface Props {}

const ContactLocationDialog = forwardRef<HTMLDivElement, Props>((_props, ref) => {
  return (
    <Dialog>
      <div ref={ref}>
        <Paper borderRadius="10px" padding="16px">
          <StyledContactLocationDialog>Location</StyledContactLocationDialog>
        </Paper>
      </div>
    </Dialog>
  );
});

const StyledContactLocationDialog = styled.div``;

export default ContactLocationDialog;
