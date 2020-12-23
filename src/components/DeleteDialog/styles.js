import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--modal-background);
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  div {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2rem;
    background: var(--white);
    width: 37.06rem;
    height: 14.56rem;
  }

  main {
    margin-left: 1.87rem;
  }

  p {
    margin-top: 2.12rem;
  }

  footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
    margin-left: 9.062rem;
    margin-top: 3.12rem;
  }
`;

export default Container;
