import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 0.06rem solid var(--dark-gray);
    padding: 2rem;
  }

  img {
    height: 4.37rem;
    width: 16.87rem;
    margin-bottom: 2.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  label {
    font-size: 0.87rem;
    font-weight: bold;
    color: var(--dark-gray);
    margin-bottom: 0.25rem;
  }

  span {
    color: var(--dark-gray);
    margin-bottom: 0.87rem;
  }

  @media (max-width: 46rem) {
    form {
      width: 90vw;
    }

    span {
      font-size: 0.9rem;
    }

    input,
    button {
      width: 16.5rem;
    }
  }
`;
