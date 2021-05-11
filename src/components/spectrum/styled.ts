import styled from 'styled-components';

interface ISpectrumWrapper {
  color: string;
  isPlaying: string;
}

const SpectrumWrapper = styled.div<ISpectrumWrapper>`
  width: fit-content;
  height: 3.125rem;
  text-align: center;
  font-size: 0.625rem;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  display: block;

  > div {
    background-color: ${(props) => props.color};
    height: 100%;
    width: 0.375rem;
    margin-left: 1px;
    margin-right: 1px;
    display: inline-block;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    -webkit-animation: wavy 1s ease infinite forwards;
    animation: wavy 1s ease infinite forwards;
    animation-play-state: ${(props) => props.isPlaying};
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.33);
  }

  & :nth-child(2),
  & :nth-child(10) {
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }

  & :nth-child(3),
  & :nth-child(7) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  & :nth-child(4),
  & :nth-child(8) {
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
  }

  & :nth-child(5),
  & :nth-child(9) {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  @-webkit-keyframes wavy {
    0% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }

    50% {
      -webkit-transform: scaleY(0.6);
      transform: scaleY(0.6);
    }

    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }

  @keyframes wavy {
    0% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }

    50% {
      -webkit-transform: scaleY(0.6);
      transform: scaleY(0.6);
    }

    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
`;

export default SpectrumWrapper;
