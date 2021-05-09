import { Input } from 'antd';
import { theme } from 'components/theme';
import styled from 'styled-components';

const SearchBar = styled(Input)`
  width: 25rem;
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

export default SearchBar;
