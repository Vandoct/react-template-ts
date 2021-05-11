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

export { ContentWrapper, ContentContainer, Content, CategoryWrapper };
