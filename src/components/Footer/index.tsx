import { StyledFooter, StyledFooterColumn } from './Footer';
import { BiHeadphone } from 'react-icons/bi';
import { ImQrcode } from 'react-icons/im';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { SiInternetarchive } from 'react-icons/si';

function Footer() {
  return (
    <StyledFooter>
      <div className="wrap w-5">
        <StyledFooterColumn>
          <div className="title">Hỗ trợ khách hàng</div>
          <ul className="list">
            <li className="row">Thẻ ưu đãi</li>
            <li className="row">Trung tâm bảo hành</li>
            <li className="row">Thanh toán và giao hàng</li>
            <li className="row">Doanh nghiệp thân thiết</li>
          </ul>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <div className="title">Hỗ trợ khách hàng</div>
          <ul className="list">
            <li className="row">Thẻ ưu đãi</li>
            <li className="row">Trung tâm bảo hành</li>
            <li className="row">Thanh toán và giao hàng</li>
            <li className="row">Doanh nghiệp thân thiết</li>
            <li className="row">Thẻ ưu đãi</li>
            <li className="row">Trung tâm bảo hành</li>
            <li className="row">Thanh toán và giao hàng</li>
            <li className="row">Doanh nghiệp thân thiết</li>
          </ul>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <div className="title">Hỗ trợ khách hàng</div>
          <ul className="list">
            <li className="row">Thẻ ưu đãi</li>
            <li className="row">Trung tâm bảo hành</li>
            <li className="row">Thanh toán và giao hàng</li>
            <li className="row">Doanh nghiệp thân thiết</li>
          </ul>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <div className="title">Cộng đồng Phong Vũ</div>
          <ul className="list">
            <li className="row">Thẻ ưu đãi</li>
            <li className="row">Trung tâm bảo hành</li>
            <li className="row">
              <div className="icon">
                <BiHeadphone />
              </div>
              Gọi mua hàng:
              <span className="hotline">1800 6867</span>
              (miễn phí)
            </li>
            <li className="row">
              <div className="icon">
                <BiHeadphone />
              </div>
              Gọi chăm sóc:
              <span className="hotline">1800 6867</span>
              (miễn phí)
            </li>
            <li className="row">Doanh nghiệp thân thiết</li>
          </ul>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <div className="title">Email liên hệ</div>
          <ul className="list">
            <li className="row">
              <div className="link-wrap">
                Hỗ trợ Khách hàng:
                <a href="mailto:junjun@gmail.com" className="link">
                  junjun@gmail.com
                </a>
              </div>
            </li>
            <li className="row">
              <div className="link-wrap">
                Liên hệ báo giá:
                <a href="mailto:junjun@gmail.com" className="link">
                  baogiajun@gmail.com
                </a>
              </div>
            </li>
            <li className="row">Trung tâm bảo hành</li>
            <li className="row">Thanh toán và giao hàng</li>
            <li className="row">Doanh nghiệp thân thiết</li>
          </ul>
        </StyledFooterColumn>
      </div>
      <div className="wrap w-5">
        <StyledFooterColumn className="w-1-3">
          <div className="title">Phương thức thanh toán</div>
          <ul className="list list--row-direction">
            <li className="row column-direction">
              <div className="purchase-icon">
                <ImQrcode />
              </div>
              QR Code
            </li>
            <li className="row column-direction">
              <div className="purchase-icon">
                <FaMoneyBillAlt />
              </div>
              Tiềm mặt
            </li>
            <li className="row column-direction">
              <div className="purchase-icon">
                <SiInternetarchive />
              </div>
              Internet Banking
            </li>
          </ul>
        </StyledFooterColumn>
        <StyledFooterColumn className="w-3-5">
          <div className="title">Danh sách các ngân hàng thanh toán online</div>
          <img src="access/banking/1.jpg" alt="#" className="banking" />
        </StyledFooterColumn>
      </div>
    </StyledFooter>
  );
}
export default Footer;
