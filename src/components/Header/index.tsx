import { StyledHeader, StyledNavItem, StyledSearchHisory, StyledUserActions } from "./Header";
import Link from 'next/Link'
import Image from 'next/image'
import { BsSearch, BsClock, BsTags, BsCalendar2Check, BsPersonCircle, BsBell, BsCart3, BsGeoAlt, BsPiggyBank, BsNewspaper } from "react-icons/bs";


import Container from "layouts/container";
import Button from "@components/Elements/Button";
import { useEffect, useRef, useState } from "react";

function Header() {
  const searchInput = useRef(null);
  const [openHistorySearch, setOpenHistorySearch] = useState(false);
  const [openUserActions, setOpenUserActions] = useState(false);
  const [zoomOutHeader, setZoomOutHeader] = useState(false);

  const handleSearchFieldClick = () => {
    setOpenHistorySearch(true)
  }

  const onBlur = () => {
    setOpenHistorySearch(false)
  }

  const onMouseLeaveSearchHistoryHandler = () => {
    setOpenHistorySearch(false)
  }

  const onMouseEnterHandler = () => {
    setOpenUserActions(true)
  }

  const onMouseLeaveHandler = () => {
    setOpenUserActions(false)
  }

  // zoom out header
  const handleScrollY = (e: any) => {
    if (e.currentTarget.scrollY >= 46) {
      setZoomOutHeader(true);
    } else {
      setZoomOutHeader(false);

    }
  }

  useEffect(() => {
    window.addEventListener("scroll", (e: Event) => handleScrollY(e));
    return () => {
      window.removeEventListener("scroll", (e: Event) => handleScrollY(e));
    };
  }, []);



  return (
    <StyledHeader className={zoomOutHeader ? "zoomout" : ""}>
      <Container>
        <div className={`header-content${zoomOutHeader ? " header-content--zoomout" : ""}`}>
          <Link href="/">
            <a className="logo">
              <Image
                alt="" src="/access/logo/logo.svg"
                width={250}
                height={35}
              />
            </a>
          </Link>
          <div className="search" onMouseLeave={onMouseLeaveSearchHistoryHandler}>
            <input
              type="text"
              placeholder="Nhập từ khóa cần tìm"
              onClick={handleSearchFieldClick}
              ref={searchInput}
            />
            <div className="search__icon">
              <BsSearch />
            </div>
            {openHistorySearch && (
              <StyledSearchHisory>
                <div className="history-title">
                  <div className="history-title__text">
                    LỊCH SỬ TÌM KIẾM
                  </div>
                  <div className="history-title__action">
                    Xóa lịch sử
                  </div>
                </div>
                <ul className="history-list">
                  <li className="history-item">
                    <BsClock className="history-item__icon" />
                    <p>Keychorn</p>
                  </li>
                  <li className="history-item">
                    <BsClock className="history-item__icon" />
                    <p>Bàn phím</p>
                  </li>
                  <li className="history-item">
                    <BsClock className="history-item__icon" />
                    <p>Màn hình máy tính, Màn hình máy tính, Màn hình máy tính, Màn hình máy tính</p>
                  </li>
                  <li className="history-item">
                    <BsClock className="history-item__icon" />
                    <p>Keychorn</p>
                  </li>
                </ul>
              </StyledSearchHisory>
            )}

          </div>
          <StyledNavItem className={zoomOutHeader ? "zoomout" : ""}>
            <li className="nav-item">
              <div className="nav-item__wrap">
                <Link href="#">
                  <a className="nav-item__link">
                    <BsTags className="nav-item__icon" />
                    <span className="nav-item__text">Khuyến mãi</span>
                  </a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-item__wrap">
                <BsCalendar2Check className="nav-item__icon" />
                <span className="nav-item__text">Đơn hàng</span>
              </div>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnterHandler}
              onMouseLeave={onMouseLeaveHandler}
            >
              <div className="nav-item__wrap">
                <BsPersonCircle className="nav-item__icon" />
                <span className="nav-item__text">Trần Tuấn Dương</span>
              </div>
              {openUserActions && (
                <StyledUserActions className={zoomOutHeader ? "zoomout" : ""}>
                  <div className="top">
                    <BsPersonCircle className="top__icon" />
                    <div className="top__title">Trần Tuấn Dương</div>
                  </div>
                  <ul className="detail-list">
                    <li className="detail-item">
                      <BsPersonCircle className="detail-item__icon" />
                      <div className="detail-item__text">Thông tin tài khoản</div>
                    </li>
                    <li className="detail-item">
                      <BsCalendar2Check className="detail-item__icon" />
                      <div className="detail-item__text">Quản lí đơn hàng</div>
                    </li>
                    <li className="detail-item">
                      <BsGeoAlt className="detail-item__icon" />
                      <div className="detail-item__text">Sổ địa chỉ</div>
                    </li>
                    <li className="detail-item">
                      <BsBell className="detail-item__icon" />
                      <div className="detail-item__text">Thông báo</div>
                    </li>
                    <li className="detail-item">
                      <BsPiggyBank className="detail-item__icon" />
                      <div className="detail-item__text">Điểm thành viên</div>
                    </li>
                    <li className="detail-item">
                      <BsNewspaper className="detail-item__icon" />
                      <div className="detail-item__text">Bản tin</div>
                    </li>
                  </ul>
                  <div className="logout-btn">
                    <Button />
                  </div>
                </StyledUserActions>
              )}


            </li>
            <li className="nav-item">
              <div className="nav-item__wrap">
                <BsBell className="nav-item__icon" />
                <span className="nav-item__text">Thông báo</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-item__wrap">
                <BsCart3 className="nav-item__icon" />
                <span className="nav-item__text">Giỏ hàng</span>
                <span className="nav-item__quantity">3</span>
              </div>
            </li>
          </StyledNavItem>
        </div>
      </Container>
    </StyledHeader>
  );
}

export default Header;
