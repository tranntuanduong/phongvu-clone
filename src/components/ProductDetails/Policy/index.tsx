import FreeShipIcon from '@components/SvgIcon/FreeShip';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { BsLaptopFill } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import { ImUndo2 } from 'react-icons/im';
import { IoMdSettings } from 'react-icons/io';
import { StyledAdvertise, StyledPolicyContent, StyledProductPolicy } from './ProductPolicy';
import Link from 'next/link';
import Countdown, { CountdownRendererFn } from 'react-countdown';

const ProductPolicy = () => {
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="time-list">
        <div className="time-wrap">
          <div className="time">
            <div className="block">{Math.floor(days / 10)}</div>
            <div className="block">{days % 10}</div>
          </div>
          <div className="text">Ngày</div>
        </div>
        <div className="time-wrap">
          <div className="time">
            <div className="block">{Math.floor(hours / 10)}</div>
            <div className="block">{hours % 10}</div>
          </div>
          <div className="text">Giờ</div>
        </div>
        <div className="time-wrap">
          <div className="time">
            <div className="block">{Math.floor(minutes / 10)}</div>
            <div className="block">{minutes % 10}</div>
          </div>
          <div className="text">Phút</div>
        </div>
        <div className="time-wrap">
          <div className="time">
            <div className="block">{Math.floor(seconds / 10)}</div>
            <div className="block">{seconds % 10}</div>
          </div>
          <div className="text">Giây</div>
        </div>
      </div>
    );
  };

  return (
    <StyledProductPolicy>
      <div className="promote">
        <FreeShipIcon />
        <p className="promote__desc">Sản phẩm được miễn phí giao hàng</p>
      </div>
      <div className="hr" />
      <StyledPolicyContent>
        <div className="title">Chính sách bán hàng</div>
        <ul className="list">
          <li className="item">
            <div className="icon">
              <FaShippingFast />
            </div>
            <div className="text">Miễn phí giao hàng cho đơn hàng từ 800K</div>
          </li>
          <li className="item">
            <div className="icon">
              <AiFillSafetyCertificate />
            </div>
            <div className="text">Cam kết hàng chính hãng 100%</div>
          </li>
          <li className="item">
            <div className="icon">
              <ImUndo2 />
            </div>
            <div className="text">Đổi trả trong vòng 10 ngày</div>
          </li>
        </ul>
      </StyledPolicyContent>
      <StyledPolicyContent>
        <div className="title">Dịch vụ khác</div>
        <ul className="list">
          <li className="item">
            <div className="icon">
              <IoMdSettings />
            </div>
            <div className="text">Sửa chữa đồng giá 150.000đ.</div>
          </li>
          <li className="item">
            <div className="icon">
              <BsLaptopFill />
            </div>
            <div className="text">Vệ sinh máy tính, laptop.</div>
          </li>
          <li className="item">
            <div className="icon">
              <AiFillSafetyCertificate />
            </div>
            <div className="text">Bảo hành tại nhà.</div>
          </li>
          <Link href="#">
            <a className="link">Xem chi tiết</a>
          </Link>
        </ul>
      </StyledPolicyContent>

      <StyledAdvertise>
        <img src="/access/advertise/ad3.png" alt="" className="image" />

        <Countdown date={Date.now() + 500000000} renderer={renderer} />
      </StyledAdvertise>
    </StyledProductPolicy>
  );
};

export default ProductPolicy;
