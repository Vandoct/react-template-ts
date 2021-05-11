import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  margin-bottom: 4.5rem;

  > {
    & :first-child {
      margin-right: 1rem;
    }

    img {
      border-radius: 100%;
    }
  }
`;

export default Header;
