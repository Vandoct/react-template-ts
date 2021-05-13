import { theme } from 'components/theme';
import styled from 'styled-components';

const NowPlayingWrapper = styled.div`
  width: 100%;

  > div {
    padding: 2rem;

    img {
      width: 220px;
      height: 220px;
      border-radius: 1rem;
    }

    p {
      margin: 1rem 0 0 0;
    }

    & p:nth-of-type(1) {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${theme.text};
    }

    & p:nth-of-type(2) {
      font-weight: 300;
      font-size: 1.25rem;
      color: ${theme.filterText};
    }
  }
`;

export default NowPlayingWrapper;
