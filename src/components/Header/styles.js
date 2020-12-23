import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 76.25rem;
  margin: 2rem auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    height: 2.31rem;
  }

  button {
    background: none;
    border: 0;
    font-size: 0.87rem;
    font-weight: bold;
    color: var(--dark-gray);
    cursor: pointer;
  }
`;

export default Container;
