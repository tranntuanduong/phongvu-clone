import Divider from '@components/Elements/Divider';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { BsBell, BsCalendar2Check, BsGeoAlt, BsPersonCircle, BsPiggyBank } from 'react-icons/bs';
import { StyledAccountMenu, StyledUser } from './AccountMenu';

const AccountMenu = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleChangePid = (pid: string) => () => {
    router.push(`/account/${pid}`);
  };

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
        <li onClick={handleChangePid('info')} className="item">
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
        </li>
      </ul>
    </StyledAccountMenu>
  );
};

export default AccountMenu;
