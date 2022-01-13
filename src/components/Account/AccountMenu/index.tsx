import { useRouter } from 'next/router';
import { StyledAccountMenu } from './AccountMenu';

const AccountMenu = () => {
  const router = useRouter();

  const handleChangePid = (pid: string) => () => {
    router.push(`/account/${pid}`);
  };

  return (
    <StyledAccountMenu>
      <ul className="list">
        <li onClick={handleChangePid('info')} className="item">
          Thông tin tài khoản
        </li>
        <li onClick={handleChangePid('orders')} className="item">
          Quản lý đơn hàng
        </li>
        <li onClick={handleChangePid('addresses')} className="item">
          Sổ địa chỉ
        </li>
        <li onClick={handleChangePid('notification')} className="item">
          Thông báo
        </li>
        <li onClick={handleChangePid('news')} className="item">
          Bản tin
        </li>
      </ul>
    </StyledAccountMenu>
  );
};

export default AccountMenu;
