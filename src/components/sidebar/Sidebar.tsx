import { FC, ReactElement } from 'react';
import { SidebarStyled, SidebarWrapper } from './styled';

const Sidebar: FC = ({ children }): ReactElement => (
  <SidebarStyled>
    <SidebarWrapper>{children}</SidebarWrapper>
  </SidebarStyled>
);

export default Sidebar;
