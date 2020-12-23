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

  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding-top: 2rem;
  }

  article {
    width: 17.56rem;
    height: 26.25rem;

    div {
      cursor: pointer;
    }
  }

  img {
    height: 18.75rem;
    width: 17.56rem;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    padding: 0.25rem 0 0.62rem 0;
  }

  footer {
    display: flex;
    align-items: center;
  }

  svg {
    cursor: pointer;
    margin-right: 0.81rem;
  }

  a {
    margin-top: 0.31rem;
  }
`;
