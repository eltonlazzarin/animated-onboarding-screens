import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 76.25rem;
  margin: 4rem auto;

  h3 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 46rem) {
    width: 90vw;

    h3 {
      font-size: 2rem;
    }

    button {
      height: 9vw;
    }
  }
`;
