import { StyledTopContact } from './TopContact';
import { BiBuildingHouse } from 'react-icons/bi';
import Link from 'next/Link';

function TopContact() {
  return (
    <StyledTopContact>
      <ul className="list">
        <li className="element">
          <Link href="#">
            <a className="element__link">
              <BiBuildingHouse className="element__icon" />
              <p>Hệ thống Showroom</p>
            </a>
          </Link>
        </li>
        <li className="element">
          <a
            href="tel:18006867"
            className="element__link"
          >
            <BiBuildingHouse className="element__icon" />
            <p>Tư vấn mua hàng</p>
            <span>18006865</span>
          </a>
        </li>
        <li className="element">
          <a
            href="tel:18006865"
            className="element__link"
          >
            <BiBuildingHouse className="element__icon" />
            <p>CSKH</p>
            <span>18006865</span>
          </a>
        </li>
        <li className="element">
          <BiBuildingHouse className="element__icon" />
          <p>Tin công nghệ</p>
        </li>
        <li className="element">
          <BiBuildingHouse className="element__icon" />
          <p>Xây dựng cấu hình</p>
        </li>
      </ul>
    </StyledTopContact>
  );
}

export default TopContact;
