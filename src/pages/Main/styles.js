import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 64px auto;

  h3 {
    font-size: 40px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
    padding-top: 32px;
  }

  article {
    width: 281px;
    height: 420px;

    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  img {
    height: 300px;
    width: 281px;
    margin-bottom: 16px;
    object-fit: cover;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    padding: 4px 0 10px 0;
  }

  footer {
    display: flex;
    align-items: center;
  }

  svg {
    cursor: pointer;
    margin-right: 13px;
  }

  a {
    margin-top: 5px;
  }
`;
