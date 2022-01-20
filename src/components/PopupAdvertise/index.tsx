/* eslint-disable react/display-name */

import Dialog from '@components/Elements/Dialog';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { colors } from '@theme/colors';
import Link from 'next/link';

interface Props {
  onClose: () => void;
}

const PopupAdvertise = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onClose } = props;
  return (
    <Dialog>
      <StyledPopupAdvertise ref={ref}>
        <Link href="#popupAdvertise">
          <a >
            <img src="/access/popup/popup1.jpg" alt="" className="banner" />
          </a>
        </Link>
        <div className="close-btn" onClick={onClose}>
          <AiFillCloseCircle />
        </div>
      </StyledPopupAdvertise>
    </Dialog>
  );
});

const StyledPopupAdvertise = styled.div`
  position: relative;

  & .banner {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }

  & .close-btn {
    color: ${colors.whiteColor};
    font-size: 40px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

export default PopupAdvertise;
