import { Input } from 'antd';
import { theme } from 'components/theme';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  position: relative;
  width: 35rem;
  min-width: 0;
`;

const SearchStyled = styled(Input)`
  padding: 0.75rem;
  border-radius: 2rem;
  background: ${theme.primary};
  border: 0;

  .ant-input-prefix {
    margin-right: 0.75rem;
  }

  input.ant-input {
    font-size: 0.875rem;
    background: transparent;
    color: ${theme.text};

    &::placeholder {
      color: ${theme.text};
    }
  }
`;

const SearchSuggestion = styled.div`
  position: absolute;
  width: 100%;
  z-index: 999;
  background: ${theme.primary};
  color: ${theme.textLight};
  border-radius: 0.5rem;
  margin-top: 0.5rem;

  > div {
    padding: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    user-select: none;

    img {
      height: 50px;
      width: 50px;
      margin-right: 1rem;
      border-radius: 0.5rem;
    }

    span {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
    }

    &:first-child {
      border-radius: 0.5rem 0.5rem 0 0;
    }

    &:last-child {
      border-radius: 0 0 0.5rem 0.5rem;
    }

    &:hover {
      background: ${theme.hover};
    }
  }
`;

export { SearchWrapper, SearchStyled, SearchSuggestion };
