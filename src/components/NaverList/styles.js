import styled from 'styled-components';

export const Container = styled.div`
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

  @media (max-width: 46rem) {
    width: 90vw;

    main {
      display: grid;
      grid-template-columns: 1fr;
      padding-top: 2rem;
    }

    img {
      width: 90vw;
    }
  }
`;
