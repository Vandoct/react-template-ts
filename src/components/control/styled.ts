import { theme } from 'components/theme';
import styled from 'styled-components';

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  align-self: stretch;

  img {
    border-radius: 100%;
    padding: 0.5rem;

    &:hover {
      background: ${theme.hover};
      cursor: pointer;
    }
  }
`;

export default ControlWrapper;
