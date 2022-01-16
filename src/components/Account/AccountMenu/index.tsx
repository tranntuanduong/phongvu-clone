import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsBell, BsCalendar2Check, BsGeoAlt, BsPersonCircle } from 'react-icons/bs';
import { changePid } from 'utils';
import { StyledAccountMenu, StyledUser } from './AccountMenu';

const AccountMenu = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [tabRouter, setTabRouter] = useState('');

  const accountMenu = useMemo(() => {
    return [{
      id: "account",
      label: t('account-infomation'),
      icon: <BsPersonCircle className="item__icon" />
    },
    {
      id: "orders",
      label: t('order-management'),
      icon: <BsCalendar2Check className="item__icon" />
    },
    {
      id: "addresses",
      label: t('address-book'),
      icon: <BsGeoAlt className="item__icon" />
    },
    {
      id: "notification",
      label: t('notification'),
      icon: <BsBell className="item__icon" />
    },]
  }, [t])


  const handleChangePid = (pid: string) => () => {
    changePid(pid, router);
  };


  useEffect(() => {
    const pathArr = router.pathname.split("/");

    setTabRouter(pathArr[pathArr.length - 1])
  }, [router])

  return (
    <StyledAccountMenu>
      <ul className="list">
        <StyledUser>
          <BsPersonCircle className="avatar" />
          <div className="wrap">
            <div className="title">Tài khoản của bạn</div>
            <div className="name">Duong Tran Tuan</div>
          </div>
        </StyledUser>
        {accountMenu.map((menu, index) => (
          <li key={index} onClick={handleChangePid(menu.id)}
            className={tabRouter === menu.id ? 'item item--active' : 'item'}
          >
            {menu.icon}
            <div className="item__text">{menu.label}</div>
          </li>
        ))}
        {/* <li onClick={handleChangePid('')} className="item">
          <BsPersonCircle className="item__icon" />
          <div className="item__text">{t('account-infomation')}</div>
        </li>
        <li onClick={handleChangePid('orders')} className="item">
          <BsCalendar2Check className="item__icon" />
          <div className="item__text">{t('order-management')}</div>
        </li>
        <li onClick={handleChangePid('addresses')} className="item">
          <BsGeoAlt className="item__icon" />
          <div className="item__text">{t('address-book')}</div>
        </li>
        <li onClick={handleChangePid('notification')} className="item">
          <BsBell className="item__icon" />
          <div className="item__text">{t('notification')}</div>
        </li> */}
      </ul>
    </StyledAccountMenu>
  );
};

export default AccountMenu;
