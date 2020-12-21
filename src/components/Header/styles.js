import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    height: 37px;
  }

  button {
    background: none;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    color: var(--dark-gray);
    cursor: pointer;
  }
`;

export default Container;
