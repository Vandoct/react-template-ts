import { theme } from 'components/theme';
import styled from 'styled-components';

const RadioWrapper = styled.div`
  width: 14.5rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 1rem;
  }

  p {
    order: 0;
    flex: 0 1 auto;
    align-self: flex-start;
    margin: 1rem 2rem 0 2rem;
    word-break: break-all;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${theme.text};
  }

  &:hover {
    background: ${theme.primary};
    cursor: pointer;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: stretch;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > :first-child {
    margin-right: 1rem;
  }

  > *:not(:first-child) {
    margin: 0 1rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export { RadioWrapper, RadioContainer };
