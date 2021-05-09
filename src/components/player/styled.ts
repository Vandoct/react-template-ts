import styled from 'styled-components';

const PlayerWrapper = styled.div`
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: center;
    padding: 2rem;

    > :nth-child(2) {
      margin-top: 2rem;
    }
  }
`;

export default PlayerWrapper;
