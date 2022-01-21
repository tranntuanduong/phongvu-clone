import Button from '@components/Elements/Button';
import i18nInstance from '@i18n/i18n';
import { PageContext } from 'contexts/PageContext';
import Container from 'layouts/container';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BsBell,
  BsCalendar2Check,
  BsCart3,
  BsClock,
  BsGeoAlt,
  BsNewspaper,
  BsPersonCircle,
  BsPiggyBank,
  BsSearch,
  BsTags,
} from 'react-icons/bs';
import { IoLanguage } from 'react-icons/io5';
import { changePid } from 'utils';
import {
  StyledCard,
  StyledHeader,
  StyledNavItem,
  StyledNotify,
  StyledSearchHisory,
  StyledSubList,
  StyledUserActions,
} from './Header';
import LogoMenu from './LogoMenu';

interface Props {
  home?: boolean;
}

function Header(props: Props) {
  const { t } = useTranslation();

  const searchInput = useRef(null);
  const [openHistorySearch, setOpenHistorySearch] = useState(false);
  const [openUserActions, setOpenUserActions] = useState(false);
  const [zoomOutHeader, setZoomOutHeader] = useState(false);
  const [openNotify, setOpenNotify] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const { handleClosePortfolioIndustry, isHome } = useContext(PageContext);
  const router = useRouter();

  const handleSearchFieldClick = () => {
    setOpenHistorySearch(true);
  };

  const onBlur = () => {
    setOpenHistorySearch(false);
  };

  const onMouseLeaveSearchHistoryHandler = () => {
    setOpenHistorySearch(false);
  };

  const onMouseEnterUserHandler = () => {
    setOpenUserActions(true);
  };

  const onMouseLeaveUserHandler = () => {
    setOpenUserActions(false);
  };

  const onMouseEnterNotiHandler = () => {
    setOpenNotify(true);
  };

  const onMouseLeaveNotiHandler = () => {
    setOpenNotify(false);
  };

  const onMouseEnterCardHandler = () => {
    setOpenCard(true);
  };

  const onMouseLeaveCardHandler = () => {
    setOpenCard(false);
  };

  // zoom out header
  // can fix typescript EventTarget

  useEffect(() => {
    if (!isHome) {
      setZoomOutHeader(true);
      return;
    }

    let isMounted = true;
    setZoomOutHeader(false);
    const handleScrollY = (e: any) => {
      if (!isMounted) return;

      if (e?.currentTarget) {
        if (e.currentTarget.scrollY >= 46) {
          setZoomOutHeader(true);
        } else {
          setZoomOutHeader(false);
          if (handleClosePortfolioIndustry) handleClosePortfolioIndustry();
        }
      }
    };
    window.addEventListener('scroll', (e: Event) => handleScrollY(e));
    return () => {
      isMounted = false;
      window.removeEventListener('scroll', (e: Event) => handleScrollY(e));
    };
  }, [handleClosePortfolioIndustry, isHome]);

  const handleSearch = (query: string) => () => {
    router.push(`/search?query=${query}`);
  };

  const handleChangeLanguage = (language: string) => () => {
    i18nInstance.changeLanguage(language);
    // setOpenUserActions(false);
  };

  const handleChangePid = (pid: string) => () => {
    changePid(pid, router);
  };

  return (
    <StyledHeader className={zoomOutHeader ? 'zoomout' : ''}>
      <Container>
        <div className={`header-content${zoomOutHeader ? ' header-content--zoomout' : ''}`}>
          {zoomOutHeader ? (
            <LogoMenu />
          ) : (
            <Link href="/">
              <a className="logo">
                <Image alt="" src="/access/logo/logo.svg" width={250} height={35} />
              </a>
            </Link>
          )}

          <div className="search" onMouseLeave={onMouseLeaveSearchHistoryHandler}>
            <input
              type="text"
              placeholder={t('search-placeholder')}
              onClick={handleSearchFieldClick}
              ref={searchInput}
            />
            <div className="search__icon">
              <BsSearch />
            </div>
            {openHistorySearch && (
              <StyledSearchHisory>
                <div className="history-title">
                  <div className="history-title__text">{t('history-search')}</div>
                  <div className="history-title__action">{t('remove-history-search')}</div>
                </div>
                <ul className="history-list">
                  <li className="history-item" onClick={handleSearch('keychorn')}>
                    <BsClock className="history-item__icon" />
                    <p>Keychorn</p>
                  </li>
                  <li className="history-item" onClick={handleSearch('bàn phím')}>
                    <BsClock className="history-item__icon" />
                    <p>Bàn phím</p>
                  </li>
                  <li className="history-item" onClick={handleSearch('màn hình')}>
                    <BsClock className="history-item__icon" />
                    <p>
                      Màn hình máy tính, Màn hình máy tính, Màn hình máy tính, Màn hình máy tính
                    </p>
                  </li>
                  <li className="history-item" onClick={handleSearch('khong day')}>
                    <BsClock className="history-item__icon" />
                    <p>Keychorn</p>
                  </li>
                </ul>
              </StyledSearchHisory>
            )}
          </div>
          <StyledNavItem className={zoomOutHeader ? 'zoomout' : ''}>
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
            <li className="nav-item" onClick={handleChangePid('orders')}>
              <div className="nav-item__wrap">
                <BsCalendar2Check className="nav-item__icon" />
                <span className="nav-item__text">Đơn hàng</span>
              </div>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnterUserHandler}
              onMouseLeave={onMouseLeaveUserHandler}
            >
              <div className="nav-item__wrap">
                <BsPersonCircle className="nav-item__icon" />
                <span className="nav-item__text">Trần Tuấn Dương</span>
              </div>
              {openUserActions && (
                <StyledUserActions className={zoomOutHeader ? 'zoomout' : ''}>
                  <div className="top">
                    <BsPersonCircle className="top__icon" />
                    <div className="top__title">Trần Tuấn Dương</div>
                  </div>
                  <ul className="detail-list">
                    <li className="detail-item" onClick={handleChangePid('account')}>
                      <BsPersonCircle className="detail-item__icon" />
                      <div className="detail-item__text">{t('account-infomation')}</div>
                    </li>
                    <li className="detail-item" onClick={handleChangePid('orders')}>
                      <BsCalendar2Check className="detail-item__icon" />
                      <div className="detail-item__text">{t('order-management')}</div>
                    </li>
                    <li className="detail-item" onClick={handleChangePid('addresses')}>
                      <BsGeoAlt className="detail-item__icon" />
                      <div className="detail-item__text">{t('address-book')}</div>
                    </li>
                    <li className="detail-item" onClick={handleChangePid('notification')}>
                      <BsBell className="detail-item__icon" />
                      <div className="detail-item__text">{t('notification')}</div>
                    </li>
                    <li className="detail-item">
                      <BsPiggyBank className="detail-item__icon" />
                      <div className="detail-item__text">{t('membership-points')}</div>
                    </li>
                    <li className="detail-item">
                      <BsNewspaper className="detail-item__icon" />
                      <div className="detail-item__text">{t('news')}</div>
                    </li>
                    <li className="detail-item">
                      <IoLanguage className="detail-item__icon" />
                      <div className="detail-item__text">
                        <div className="label">{t('language')}</div>
                        <img
                          src={`access/language/${i18nInstance.language}.png`}
                          alt=""
                          className="img"
                        />
                      </div>

                      <StyledSubList className="sub-list-wrap">
                        <ul className="sub-list">
                          <li className="sub-list__item" onClick={handleChangeLanguage('vn')}>
                            <img src="/access/language/vn.png" alt="" className="img" />
                            <div className="label">{t('vn')}</div>
                          </li>
                          <li className="sub-list__item" onClick={handleChangeLanguage('en')}>
                            <img src="/access/language/en.png" alt="" className="img" />
                            <div className="label">{t('en')}</div>
                          </li>
                        </ul>
                      </StyledSubList>
                    </li>
                  </ul>
                  <div className="logout-btn">
                    <Button>{t('logout')}</Button>
                  </div>
                </StyledUserActions>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnterNotiHandler}
              onMouseLeave={onMouseLeaveNotiHandler}
            >
              <div className="nav-item__wrap">
                <BsBell className="nav-item__icon" />
                <span className="nav-item__text">Thông báo</span>
              </div>
              {openNotify && (
                <StyledNotify className={zoomOutHeader ? 'zoomout' : ''}>
                  <img alt="" src="/access/popup/no-notify.png" />
                  <span>Bạn chưa có thông báo mới</span>
                </StyledNotify>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnterCardHandler}
              onMouseLeave={onMouseLeaveCardHandler}
            >
              <div className="nav-item__wrap">
                <BsCart3 className="nav-item__icon" />
                <span className="nav-item__text">Giỏ hàng</span>
                <span className="nav-item__quantity">3</span>
              </div>
              {openCard && (
                <StyledCard className={zoomOutHeader ? 'zoomout' : ''}>
                  <ul className="list">
                    <li className="item">
                      <img src="/access/products/dongho/dongho1.jpg" alt="" className="item__img" />
                      <div className="item__content">
                        <Link href="#">
                          <a>
                            <p className="item__content-title">
                              Vòng đeo tay/ Đồng hồ thông minh Xiaomi Amazfit Pace (UYG4012RT) Vòng
                              đeo tay/ Đồng hồ thông minh Xiaomi Amazfit Pace (UYG4012RT)
                            </p>
                          </a>
                        </Link>
                        <div className="item__content-quantity">Số lượng 3</div>
                        <div className="item__content-price">3.690.000đ</div>
                      </div>
                    </li>
                    <li className="item">
                      <img src="/access/products/dongho/dongho1.jpg" alt="" className="item__img" />
                      <div className="item__content">
                        <Link href="#">
                          <a>
                            <p className="item__content-title">
                              Vòng đeo tay/ Đồng hồ thông minh Xiaomi Amazfit Pace (UYG4012RT) Vòng
                              đeo tay/ Đồng hồ thông minh Xiaomi Amazfit Pace (UYG4012RT)
                            </p>
                          </a>
                        </Link>
                        <div className="item__content-quantity">Số lượng 3</div>
                        <div className="item__content-price">3.690.000đ</div>
                      </div>
                    </li>
                    <li className="item">
                      <img src="/access/products/dongho/dongho1.jpg" alt="" className="item__img" />
                      <div className="item__content">
                        <Link href="#">
                          <a>
                            <p className="item__content-title">
                              Vòng đeo tay/ Đồng hồ thông minh Xiaomi Amazfit Pace (UYG4012RT) Vòng
                              đeo tay/ Đồng hồ thông minh Xiaomi Amazfit Pace (UYG4012RT)
                            </p>
                          </a>
                        </Link>
                        <div className="item__content-quantity">Số lượng 3</div>
                        <div className="item__content-price">3.690.000đ</div>
                      </div>
                    </li>
                    <li className="item">
                      <img src="/access/products/dongho/dongho1.jpg" alt="" className="item__img" />
                      <div className="item__content">
                        <Link href="#">
                          <a>
                            <p className="item__content-title">Vòng đeo tay</p>
                          </a>
                        </Link>
                        <div className="item__content-quantity">Số lượng 3</div>
                        <div className="item__content-price">3.690.000đ</div>
                      </div>
                    </li>
                  </ul>
                  <div className="count">
                    <div className="count__quantity">Tổng tiền (3) sản phẩm</div>
                    <div className="count__price">5.899.000đ</div>
                  </div>
                  <Link href="/cart">
                    <a>
                      <Button size="large" margin="20px 0 0 0">
                        Xem giỏ hàng
                      </Button>
                    </a>
                  </Link>
                </StyledCard>
              )}
            </li>
          </StyledNavItem>
        </div>
      </Container>
    </StyledHeader>
  );
}

export default Header;
