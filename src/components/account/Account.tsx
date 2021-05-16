import { Popover } from 'antd';
import AccountIcon from 'assets/icon/account.svg';
import { FC, ReactElement, useState } from 'react';
import AccountMenu, { IAccountMenuProps } from './AccountMenu';
import { AccountStyled } from './styled';

interface IAccountProps extends IAccountMenuProps {
  name?: string | null;
}

const Account: FC<IAccountProps> = ({
  name = null,
  isLoggedIn,
  onLogin,
  onRegister,
  onLogout,
}): ReactElement => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (value: boolean) => {
    setVisible(value);
  };

  const handleLoginClick = () => {
    setVisible(false);
    if (onLogin) onLogin();
  };

  const handleRegisterClick = () => {
    setVisible(false);
    if (onRegister) onRegister();
  };

  const handleLogoutClick = () => {
    setVisible(false);
    if (onLogout) onLogout();
  };

  return (
    <AccountStyled>
      <Popover
        visible={visible}
        onVisibleChange={handleVisibleChange}
        content={
          <AccountMenu
            isLoggedIn={isLoggedIn}
            onLogin={handleLoginClick}
            onRegister={handleRegisterClick}
            onLogout={handleLogoutClick}
          />
        }
        placement="bottomRight"
        trigger="click"
        title={name}>
        <img src={AccountIcon} alt="profile" />
      </Popover>
    </AccountStyled>
  );
};

export default Account;
