import Link from 'next/link';
import { BiBuildingHouse } from 'react-icons/bi';
import { StyledTopContact } from './TopContact';

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
          <Link href="tel:18006867">
            <a className="element__link">
              <BiBuildingHouse className="element__icon" />
              <p>Tư vấn mua hàng</p>
              <span>18006865</span>
            </a>
          </Link>
        </li>
        <li className="element">
          <Link href="tel:18006865">
            <a className="element__link">
              <BiBuildingHouse className="element__icon" />
              <p>CSKH</p>
              <span>18006865</span>
            </a>
          </Link>
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
    </StyledTopContact >
  );
}

export default TopContact;
