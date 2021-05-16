/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, ReactElement } from 'react';
import { AccountMenuWrapper } from './styled';

export interface IAccountMenuProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onRegister?: () => void;
  onLogout?: () => void;
}

const AccountMenu: FC<IAccountMenuProps> = ({
  isLoggedIn = false,
  onLogin,
  onRegister,
  onLogout,
}): ReactElement => (
  <AccountMenuWrapper>
    {isLoggedIn ? (
      <>
        <p onClick={onLogout}>Logout</p>
      </>
    ) : (
      <>
        <p onClick={onLogin}>Login</p>
        <p onClick={onRegister}>Register</p>
      </>
    )}
  </AccountMenuWrapper>
);

export default AccountMenu;
