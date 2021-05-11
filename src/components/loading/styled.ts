import { theme } from 'components/theme';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${theme.primaryDark};
  z-index: 9999;

  > * {
    width: fit-content;
    height: fit-content;
    position: relative;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
  }
`;

const LoadingContainer = styled.div`
  height: 5rem;

  > div {
    margin: 2px;
    background-color: ${theme.text};
    height: 100%;
    width: 0.5rem;
    display: inline-block;
    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }

    20% {
      -webkit-transform: scaleY(1);
    }
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }

    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
`;

export { LoadingWrapper, LoadingContainer };
