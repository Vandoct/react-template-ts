import { theme } from 'components/theme';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 19.375rem;
  min-height: 100%;
  background-color: ${theme.primaryDark};
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
