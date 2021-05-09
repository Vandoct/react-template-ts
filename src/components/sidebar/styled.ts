import { theme } from 'components/theme';
import styled from 'styled-components';

const SidebarStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 19.375rem;
  height: 100%;
  background: ${theme.primary};
`;

const SidebarWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  text-align: center;
`;

export { SidebarStyled, SidebarWrapper };
