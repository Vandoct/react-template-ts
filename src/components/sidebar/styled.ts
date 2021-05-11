import { theme } from 'components/theme';
import styled from 'styled-components';

export interface ISidebarStyledProps {
  left: string;
}

const SidebarStyled = styled.div<ISidebarStyledProps>`
  position: fixed;
  top: 0;
  left: ${(props) => props.left};
  width: 19.375rem;
  height: 100%;
  background: ${theme.primary};
  transition: 0.3s;
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
