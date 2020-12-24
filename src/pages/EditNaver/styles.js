import styled from 'styled-components';

export const Container = styled.div`
  width: 37rem;
  margin: 4rem auto;

  header {
    display: flex;
    align-items: center;
  }

  svg {
    margin-top: 0.31rem;
  }

  h2 {
    color: var(--dark-gray);
    font-weight: bold;
    margin-left: 1.37rem;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding-top: 2rem;
  }

  label {
    font-size: 0.87rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
    color: var(--dark-gray);
  }

  footer {
    display: flex;
    align-items: center;
    margin: 2rem 0 0 25.93rem;
  }

  @media (max-width: 46rem) {
    width: 90vw;

    section {
      display: grid;
      grid-template-columns: 1fr;
      padding-top: 2rem;
    }

    input {
      width: 90vw;
    }

    footer {
      margin: 2rem 0 2rem 0;
    }

    button {
      width: 90vw;
      margin-bottom: 2rem;
    }
  }
`;
