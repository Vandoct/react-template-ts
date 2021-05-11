import { FC, ReactElement } from 'react';
import { SidebarStyled, SidebarWrapper } from './styled';

interface ISidebarProps {
  isShow?: boolean;
}

const Sidebar: FC<ISidebarProps> = ({
  isShow = true,
  children,
}): ReactElement => (
  <SidebarStyled left={isShow ? '0rem' : '-19.375rem'}>
    <SidebarWrapper>{children}</SidebarWrapper>
  </SidebarStyled>
);

export default Sidebar;
