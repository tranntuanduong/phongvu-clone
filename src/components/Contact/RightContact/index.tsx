import useOnClickOutside from 'hooks/useOnclickOutside';
import { Fragment, useRef, useState } from 'react';
import styled from 'styled-components';
import ContactLocationDialog from './ContactLocationDialog';
import ContactMailDialog from './ContactMailDialog';
import ContactPhoneDialog from './ContactPhoneDialog';

const RightContact = () => {
  // mail dialog
  const [openContactMailDialog, setOpenContactMailDialog] = useState(false);
  const mailDialogRef = useRef(null);

  //phone dialog
  const [openContactPhoneDialog, setOpenContactPhoneDialog] = useState(false);
  const phoneDialogRef = useRef(null);

  //location dialog
  const [openContactLocationDialog, setOpenContactLocationDialog] = useState(false);
  const locationDialogRef = useRef(null);

  const handleCloseDialog = () => {
    setOpenContactPhoneDialog(false);
    setOpenContactMailDialog(false);
    setOpenContactLocationDialog(false);
  };

  const handleToggleContactMailDialog = () => {
    setOpenContactMailDialog(!openContactMailDialog);
  };

  const handleToggleContactPhoneDialog = () => {
    setOpenContactPhoneDialog(!openContactPhoneDialog);
  };

  const handleToggleContactLocationDialog = () => {
    setOpenContactLocationDialog(!openContactLocationDialog);
  };

  useOnClickOutside(phoneDialogRef, handleCloseDialog);
  useOnClickOutside(mailDialogRef, handleCloseDialog);
  useOnClickOutside(locationDialogRef, handleCloseDialog);

  return (
    <Fragment>
      <StyledRightContact>
        <div className="contact-item" onClick={handleToggleContactMailDialog}>
          <img src="/access/contact/mail.svg" alt="" className="contact-icon" />
        </div>
        <div className="contact-item" onClick={handleToggleContactPhoneDialog}>
          <img src="/access/contact/phone.svg" alt="" className="contact-icon" />
        </div>
        <div className="contact-item" onClick={handleToggleContactLocationDialog}>
          <img src="/access/contact/location.svg" alt="" className="contact-icon" />
        </div>
        <div className="contact-item">
          <img src="/access/contact/fb.svg" alt="" className="contact-icon" />
        </div>
        <div className="messenger">
          <img src="/access/contact/mes.png" alt="" className="contact-messenger" />
        </div>
      </StyledRightContact>
      {openContactMailDialog && <ContactMailDialog ref={mailDialogRef} />}
      {openContactPhoneDialog && <ContactPhoneDialog ref={phoneDialogRef} />}
      {openContactLocationDialog && <ContactLocationDialog ref={locationDialogRef} />}
    </Fragment>
  );
};

const StyledRightContact = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 80px;
  right: 20px;
  align-items: flex-end;
  z-index: 2;

  & .contact-item {
    margin-top: 8px;
    padding-right: 4px;
    cursor: pointer;

    & .contact-icon {
      width: 38px;
      height: 38px;
      border-radius: 50%;
    }
  }

  & .messenger {
    height: 50px;
    width: min-content;
    margin-top: 30px;
    cursor: pointer;

    & .contact-messenger {
      height: 100%;
    }
  }
`;

export default RightContact;
