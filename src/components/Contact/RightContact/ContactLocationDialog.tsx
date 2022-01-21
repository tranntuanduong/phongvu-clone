/* eslint-disable react/display-name */
import Dialog from '@components/Elements/Dialog';
import Paper from '@components/Elements/Paper';
import { colors } from '@theme/colors';
import { fontSizes } from '@theme/fontSizes';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { BiBuildingHouse } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const contactList = [
  {
    name: 'Phong Vũ Trần Đại Nghĩa',
    location: '2A Trần Đại Nghĩa, Quận Hai Bà Trưng, Hà Nội',
    phone: '02473026867',
    mapSearch: 'Số 364 Đ. Ng. Gia Tự, P.Tiền An, Bắc Ninh, 220000',
  },
  {
    name: 'Phong Vũ Long Bình',
    location: '37 Bùi Văn Hòa, Khu phố 4, Phường Long Bình, TP Biên Hòa Đồng Nai',
    phone: '02473026867',
    mapSearch: 'Số 11 Đại lộ Lê Lợi, P. Điện Biên, Thành phố Thanh Hóa, Thanh Hoá 40000',
  },

  {
    name: 'Phong vũ thái hà, Hà Nội',
    location: 'Số 1 Thái Hà, Đống Đa, Hà Nội',
    phone: '02473026867',
    mapSearch: '393 Lương Ngọc Quyến, Hàng Văn Thụ0, Thành phố Thái Nguyên, Thái Nguyên',
  },
  {
    name: 'Phong Vũ Nguyễn Văn Linh',
    location: '16 Nguyễn Văn Linh, Phường Nam Dương, Quận Hải Châu, Thành Phố Đà Nẵng',
    phone: '02473026867',
    mapSearch: 'Số 10 Đại lộ Lê Lợi, P. Điện Biên, Thành phố Thanh Hóa, Thanh Hoá 40000',
  },
  {
    name: 'Phong vũ thái hà, Hà Nội 1',
    location: 'Số 1 Thái Hà, Đống Đa, Hà Nội',
    phone: '02473026867',
    mapSearch: '1A P. Trần Đại Nghĩa, P, Hai Bà Trưng, Hà Nội 100000',
  },
  {
    name: 'Phong Vũ Trần Đại Nghĩa 1',
    location: '2A Trần Đại Nghĩa, Quận Hai Bà Trưng, Hà Nội',
    phone: '02473026867',
    mapSearch: 'Số 363 Đ. Ng. Gia Tự, P.Tiền An, Bắc Ninh, 220000',
  },
  {
    name: 'Phong vũ thái hà, Hà Nội 1',
    location: 'Số 1 Thái Hà, Đống Đa, Hà Nội',
    phone: '02473026867',
    mapSearch: '391 Lương Ngọc Quyến, Hàng Văn Thụ0, Thành phố Thái Nguyên, Thái Nguyên',
  },
  {
    name: 'Phong Vũ Nguyễn Văn Linh 1',
    location: '16 Nguyễn Văn Linh, Phường Nam Dương, Quận Hải Châu, Thành Phố Đà Nẵng',
    phone: '02473026867',
    mapSearch: 'Số 9 Đại lộ Lê Lợi, P. Điện Biên, Thành phố Thanh Hóa, Thanh Hoá 4000',
  },
];

interface Props {
  onClose: () => void;
}

const ContactLocationDialog = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onClose } = props;
  const [map, setMap] = useState(contactList[0].mapSearch);

  const handleChangeMap = (searchMap: string) => () => {
    setMap(searchMap);
  };

  return (
    <Dialog>
      <div ref={ref}>
        <Paper borderRadius="10px">
          <StyledContactLocationDialog>
            <StyledShowroom>
              <div className="title">Showroom</div>
              <ul className="list">
                {contactList.map((contact, index) => (
                  <li
                    key={index}
                    className={contact.mapSearch === map ? 'item active' : 'item'}
                    onClick={handleChangeMap(contact.mapSearch)}
                  >
                    <div className="wrap">
                      <BiBuildingHouse className="icon" />
                      <div className="contact">{contact.name}</div>
                    </div>
                    <div className="wrap">
                      <IoLocationOutline className="icon" />
                      <div className="sub-contact">{contact.location}</div>
                    </div>
                    <div className="wrap">
                      <FiPhone className="icon" />
                      <div className="sub-contact">{contact.phone}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </StyledShowroom>
            <iframe
              className="map"
              width="100%"
              height="100%"
              loading="lazy"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA3SqmfhXFiVqLgLAe4-n93YT3FD6PRnrQ
              &q=${map}`}
            ></iframe>

            <div className="close-btn" onClick={onClose}>
              <IoClose />
            </div>
          </StyledContactLocationDialog>
        </Paper>
      </div>
    </Dialog>
  );
});

const StyledContactLocationDialog = styled.div`
  display: flex;
  height: 700px;
  width: 1000px;
  color: ${colors.text};
  position: relative;

  & .map {
    flex: 1;
  }

  & .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.whiteColor};
    box-shadow: rgb(0 0 0 / 65%) 0 1px 9px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.whitesmoke};
    }
  }
`;

const StyledShowroom = styled.div`
  flex: 1;
  color: ${colors.textGrey};

  & .title {
    padding: 24px 16px;
    text-align: center;
    font-size: ${fontSizes.subtitle2};
    font-weight: 600;
  }

  & .list {
    height: calc(100% - 64px);
    overflow-y: scroll;
  }

  & .item {
    padding: 16px;
    border-top: 1px solid ${colors.border};
    cursor: pointer;

    &:hover {
      background-color: ${colors.whitesmoke};
    }

    & .contact {
      font-size: ${fontSizes.body1};
      color: ${colors.textGrey};
      font-weight: 600;
    }

    & .sub-contact {
      font-size: ${fontSizes.desc1};
      line-height: 1.5;
    }

    & .wrap {
      display: flex;
      margin-top: 5px;
    }

    & .icon {
      font-size: 16px;
      color: ${colors.textGrey};
      margin-right: 8px;
    }
  }

  & .item.active {
    border-left: 2px solid ${colors.primaryColor};
    background-color: ${colors.whitesmoke};
  }
`;

export default ContactLocationDialog;
