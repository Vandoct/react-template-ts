import { theme } from 'components/theme';
import styled from 'styled-components';

interface IContentWrapperProps {
  isShow?: boolean;
}

const ContentWrapper = styled.div<IContentWrapperProps>`
  position: absolute;
  top: 0;
  right: 0;
  left: ${(props) => (props.isShow ? '19.375rem' : '0rem')};
  min-height: 100%;
  background-color: ${theme.primaryDark};
  transition: 0.3s;
`;

const ContentContainer = styled.div`
  padding: 2rem 3.5rem 0 3.5rem;
`;

const Content = styled.div``;

const CategoryWrapper = styled.div`
  margin-bottom: 1rem;

  h1 {
    color: ${theme.navTextLight};
  }
`;

const LoginWrapper = styled.div`
  h1 {
    text-align: center;
    font-weight: 700;
    color: ${theme.textLight};
    margin: 0;
  }

  p:first-of-type {
    text-align: center;
    color: ${theme.text};
  }

  p:nth-of-type(2) {
    margin: 0;
    text-align: center;
    color: ${theme.text};

    span {
      color: ${theme.textLight};
      font-weight: 500;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  input {
    color: ${theme.primary};
    border-radius: 0.3rem;
  }

  .ant-btn-primary {
    color: white;
    font-weight: 600;
  }

  .ant-input-affix-wrapper {
    border-radius: 0.3rem;
  }

  .ant-btn-lg {
    border-radius: 0.5rem;
  }

  .ant-form-item {
    &:first-child {
      margin-bottom: 0.5em;
    }
  }

  .ant-form {
    p {
      color: ${theme.text};

      &:hover {
        color: ${theme.textLight};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export {
  ContentWrapper,
  ContentContainer,
  Content,
  CategoryWrapper,
  LoginWrapper,
};
